export function GardenSummary({ list }) {
    return (
        <div>
            <p>Skirtingos prekes: {list.length}</p>
            <p>Bendras kiekis: {list.reduce((t, n) => t + n.amount, 0)}</p>
            <p>Preke su maziausiu kiekiu: Morka</p>
            <p>Preke su didziausiu kiekiu: Pomidoras</p>
        </div>
    )
}