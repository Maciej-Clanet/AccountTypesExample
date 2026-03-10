import "./Home.css"
import Balatro from "../../components/Balatro/Balatro"

export default function Home() {

    return (
        <div className="home-page">
            <Balatro
                isRotate={false}
                mouseInteraction
                pixelFilter={970}
                color1="#DE443B"
                color2="#006BB4"
                color3="#162325"
            />
            <section className="banner">
                <h1>Courseraptor</h1>
                <h2>Web Dev Tutoring</h2>
            </section>
        </div>
    )
}