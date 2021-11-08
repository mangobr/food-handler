import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
// import { v4 as uuid } from 'uuid'

@Entity("instance")
class Instance {
  
  @PrimaryColumn()
  readonly id:string

  @Column()
  url: string

  @Column()
  photo: Object
  
  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export { Instance }