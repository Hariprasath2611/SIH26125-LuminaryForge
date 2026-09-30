import { describe, it, expect } from 'vitest';
import { generatePredicateProof, verifyPredicateLocally } from '../src/zk/prover';

describe('Zero-Knowledge Predicate Prover Engine', () => {
  const issuerAddress = '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266';

  it('generates valid Groth16 proof when attribute meets or exceeds threshold (e.g. CGPA 9.4 >= 7.5)', async () => {
    const result = await generatePredicateProof({
      attributeName: 'cgpa',
      attributeValue: 9.4,
      threshold: 7.5,
      issuerAddress,
    });

    expect(result.success).toBe(true);
    expect(result.predicateSatisfied).toBe(true);
    expect(result.proof).toBeDefined();

    // Check proof points format
    expect(result.proof?.a).toHaveLength(2);
    expect(result.proof?.b).toHaveLength(2);
    expect(result.proof?.b[0]).toHaveLength(2);
    expect(result.proof?.c).toHaveLength(2);
    expect(result.proof?.input).toHaveLength(3);

    // Verify raw attribute value is redacted from proof/public signals
    expect(result.hiddenAttributes?.attributeValueRedacted).toBe(true);
    expect((result.publicSignals as any)?.attributeValue).toBeUndefined();

    // Verify local verification
    const verified = verifyPredicateLocally(result);
    expect(verified).toBe(true);
  });

  it('rejects proof synthesis when attribute is below threshold (e.g. CGPA 6.8 < 7.5)', async () => {
    const result = await generatePredicateProof({
      attributeName: 'cgpa',
      attributeValue: 6.8,
      threshold: 7.5,
      issuerAddress,
    });

    expect(result.success).toBe(false);
    expect(result.predicateSatisfied).toBe(false);
    expect(result.error).toMatch(/Constraint violation/i);
    expect(result.proof).toBeUndefined();
  });

  it('proves age verification predicate (Age 21 >= 18)', async () => {
    const result = await generatePredicateProof({
      attributeName: 'age',
      attributeValue: 21,
      threshold: 18,
      issuerAddress,
    });

    expect(result.success).toBe(true);
    expect(result.predicateSatisfied).toBe(true);
    expect(result.publicSignals?.threshold).toBe(1800);
  });
});
