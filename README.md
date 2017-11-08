# prime-encryption

learning about:
- Prime numbers
- RSA encryption and 
- zkSNARKs: (Zero-Knowledge Succinct Non-Interactive Argument of Knowledge)
  - Succinct: the sizes of the messages are tiny in comparison to the length of the actual computation
  - Non-interactive: there is no or only little interaction. For zkSNARKs, there is usually a setup phase and after that a single message from the prover to the verifier. Furthermore, SNARKs often have the so-called “public verifier” property meaning that anyone can verify without interacting anew, which is important for blockchains.
  - ARguments: the verifier is only protected against computationally limited provers. Provers with enough computational power can create proofs/arguments about wrong statements (Note that with enough computational power, any public-key encryption can be broken). This is also called “computational soundness”, as opposed to “perfect soundness”.
  of 
  - Knowledge: it is not possible for the prover to construct a proof/argument without knowing a certain so-called witness (for example the address she wants to spend from, the preimage of a hash function or the path to a certain Merkle-tree node).
