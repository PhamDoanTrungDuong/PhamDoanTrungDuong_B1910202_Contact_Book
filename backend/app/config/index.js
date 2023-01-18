const config = {
	app: {
		port: process.env.PORT || 3000,
	},
	db: {
		uri: process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/contact_app",
		// uri: "mongodb+srv://thienanga075:TrungPDTdu0ng1@cluster0.kmbcvuo.mongodb.net/?retryWrites=true&w=majority",
	},
};
module.exports = config;


