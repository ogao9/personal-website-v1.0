export default function Intro({title, subtitle}) {
    return (
        <div className="text-center my-10">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p>{subtitle}</p>
        </div>
    );
}
