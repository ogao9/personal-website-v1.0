export default function Intro({title, subtitle}) {
    return (
        <header className="text-center my-10">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p>{subtitle}</p>
        </header>
    );
}
