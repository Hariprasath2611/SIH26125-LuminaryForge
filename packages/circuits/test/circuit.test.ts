import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Circom Predicate Circuit Definition', () => {
  const circuitPath = path.resolve(__dirname, '../credential_predicate.circom');

  it('defines the credential_predicate.circom file with correct signals and constraints', () => {
    expect(fs.existsSync(circuitPath)).toBe(true);
    const content = fs.readFileSync(circuitPath, 'utf8');

    // Public signals
    expect(content).toContain('signal input issuerPubKeyHash;');
    expect(content).toContain('signal input threshold;');
    expect(content).toContain('signal input currentTime;');

    // Private signals
    expect(content).toContain('signal input attributeValue;');
    expect(content).toContain('signal input salt;');

    // Comparators and Poseidon
    expect(content).toContain('component gte = GreaterEqThan(64);');
    expect(content).toContain('component commitmentHasher = Poseidon(2);');
    expect(content).toContain('gte.out === 1;');
  });
});
