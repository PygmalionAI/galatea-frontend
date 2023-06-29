import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../schemas/users';

/* Register the User in MongoDB, Hash PW */
export const register = async (req, res) => {
  try {
    const {
      username,
      email,
      password,
      betaUser,
      isAdmin,
      isBanned,
    } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      passwordHash,
      betaUser,
      isAdmin,
      isBanned,
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}