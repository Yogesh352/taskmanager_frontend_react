import { MemberResponse } from '@/domains/members/types/member';
import {faker} from "@faker-js/faker"

const generateMember: () => MemberResponse =() => ({
    avatar: faker.image.avatar(),
    name: faker.name.findName(),
    jobRole: faker.name.jobTitle(),
    hireDate: faker.datatype.datetime(),
    boss: faker.name.findName(),
})

export {generateMember}