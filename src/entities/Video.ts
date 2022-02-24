import { Entity, Column, ManyToOne, JoinColumn,PrimaryColumn } from "typeorm";
import { v4 as uuid} from "uuid";
import { Category } from "./Category"

@Entity("videos")
export class Video {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;
    
    @Column()
    description: string;

    @Column()
    duration: number;

    @Column()
    categorie_id: string;

    @ManyToOne(()=> Category)
    @JoinColumn({name:"categorie_id"})
    category:  Category;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}