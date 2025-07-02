// Generating token

const token = jwt.sign(
  { userId: user._id },
  ProcessingInstruction.env.JWT_SECRET,
  { expiresIn: "1h" }
);
