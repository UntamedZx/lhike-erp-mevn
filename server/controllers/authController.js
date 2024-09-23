import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

export const register = async (req, res) => {
	console.log(req.body);
	const { name, email, password, role } = req.body;

	const userExists = await User.findOne({ email });
	if (userExists) {
		return res.status(400).json({ message: "Email already exists" });
	}

	const user = await User.create({
		name,
		email,
		password,
		role,
	});

	if (user) {
		res.status(201).json({
			token: generateToken(user._id, user.role),
		});
	} else {
		res.status(500).json({ message: "Invalid user data" });
	}
};

export const login = async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email });

	if (user && (await user.matchPassword(password))) {
		res.json({
			token: generateToken(user._id, user.role),
			user: { name: user.name, email: user.email },
		});
	} else {
		res.status(401).json({ message: "Invalid credentials" });
	}
};
