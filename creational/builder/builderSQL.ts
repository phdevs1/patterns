class QueryBuilder {
    private table: string;
    private fields: string[] = [];
    private conditions: string[] = [];
    private orderFields: string[] = [];
    private limitCount?: number;


    constructor(table: string){
        this.table = table
    }

    select(...fields: string[]): QueryBuilder {
        this.fields.push(...fields);
        return this;
    }

    where(condition: string): QueryBuilder {
        this.conditions.push(condition);
        return this;
    }

    orderBy(field: string, direction: 'ASC' | 'DESC' = 'ASC'): QueryBuilder {
        this.orderFields.push(`${field} ${direction}`);
        return this;
    }

    limit(count: number): QueryBuilder {
        this.limitCount = count;
        return this;
    }

    execute(): string {
        let query = `SELECT ${this.fields.length ? this.fields.join(', ') : '*'} FROM ${this.table}`;

        if (this.conditions.length) {
            query += ` WHERE ${this.conditions.join(' AND ')}`;
        }

        if (this.orderFields.length) {
            query += ` ORDER BY ${this.orderFields.join(', ')}`;
        }

        if (this.limitCount !== undefined) {
            query += ` LIMIT ${this.limitCount}`;
        }

        return query + ';';
    }  
}

function mainsql(){
    const usersQuery = new QueryBuilder('clients')
    .select('id', 'name', 'email')
    .where('age > 18')
    .where("country= 'CL'")
    .orderBy('name', 'ASC')
    .orderBy('age', 'DESC')
    .limit(10)
    .execute();

    console.log(usersQuery); // Output: SELECT id, name, email FROM clients WHERE age > 18 ORDER BY name ASC LIMIT 10;

}

mainsql()