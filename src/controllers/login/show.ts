export default async (req: any, res: any) => {
    const user = req.session.user;
    res.render('login/show', { user });
};
