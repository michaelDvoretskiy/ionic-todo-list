export interface Activity {
    name: String;
    date: Date;
    description: String;
}

export class ActivityList {
    static activities: Activity[] = [
        { 
            name: 'Зробити лабораторну роботу',
            date: new Date('2019-04-10'),
            description: 'реалізувати мобільний застосунок засобами Ionic Framework',
        },
        { 
            name: 'Подивитись улюблений фільм',
            date: new Date('2019-04-11'),
            description: 'не забути при колу та поп-корн',
        },
        { 
            name: 'Підготуватись до контрольної роботи',
            date: new Date('2019-04-12'),
            description: 'Повторити вивчені теми та виспатись',
        },
    ];
}