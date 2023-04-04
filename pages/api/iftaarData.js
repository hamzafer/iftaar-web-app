const iftaarData = [
    {id: 1, name: 'Saad', date: 'April 3, 2023', location: 'Chiniot', done: true},
    {id: 2, name: 'Ibnet', date: 'April 1, 2023', location: `Ibnet's home`, done: true},
    {id: 3, name: 'Sohaib', date: 'March 28, 2023', location: `Sohaib's home`, done: true},
    {id: 4, name: 'Chuchu', date: 'April 6, 2023', location: `Chuchu's home`, done: false},
    {id: 5, name: 'Ahnuf + Munir', date: 'April 8, 2023', location: `TBD`, done: false},
    {id: 6, name: 'Afnan', date: 'April 7, 2023', location: `Afnan's home`, done: false},
    {id: 7, name: 'Kagge', date: 'TBD', location: `Kagge's home`, done: false},
    {id: 8, name: 'Yasir', date: 'TBD', location: `Yasir's home`, done: false},
    {id: 9, name: 'TZ + Hamza Bhai', date: 'TBD', location: `Four seasons`, done: false},
    {id: 10, name: 'Jamil', date: 'TBD', location: `Jamil's home`, done: false},
];

export default function handler(req, res) {
    res.status(200).json(iftaarData);
}
