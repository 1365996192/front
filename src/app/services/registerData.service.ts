// in-memory-data.service.ts
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const users = [
            { id: 1, firstName: 'Alice', lastName: 'w', gender: 'female', job: 'xxx', dob: '2023-07-01' },
            { id: 2, firstName: 'Bob', lastName: 'z', gender: 'male', job: 'xxx', dob: '2022-07-01' },
        ];

        return { users };
    }
}
