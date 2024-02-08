function Name() {
    const names = ["Afham", "star", "Edward"];
    const getName = () => names[Math.floor(Math.random() * names.length)];
    return (
        <p>
            Hello {getName()}
        </p>
    )
}

export default Name;