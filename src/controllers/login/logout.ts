export default async (req: any, res: any) => {
    req.session.destroy((err: Error) => {
	if (err) {
	    console.error('Error while logging out:', err);
	}
	const message = "You successfully logged out."
	res.render('message', { message });
    });
};
