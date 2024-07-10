const SurveyLayout = ({
    children
    }: Readonly<{
        children: React.ReactNode;
    }>) => {
        return (
            <main>
                {children}
                <div>Powered By Tendo</div>
                <div>PLACEHOLDER FOR HERO BANNER</div>
            </main>
        );
}

export default SurveyLayout;