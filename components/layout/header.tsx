import NextToJump from "../widgets/next-to-jump";
import Navbar from "../widgets/navbar";

export default function Header() {
    return (
        <header className="relative block">
            <NextToJump />
            <Navbar />
        </header>
    );
}