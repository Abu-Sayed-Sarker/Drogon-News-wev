import Header from "../Components/Header";
import LetestNews from "../Components/LetestNews";
import Main from "../Components/Main";
import Navbar from "../Components/Navbar";

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <section className="w-11/12 mx-auto">
                <LetestNews></LetestNews>

            </section>
            <nav className="w-11/12 mx-auto py-2">
            <Navbar></Navbar>
            </nav>
            <main className="w-11/12 mx-auto py-5">
                <Main></Main>
            </main>
        </div>
    );
};

export default HomeLayout;