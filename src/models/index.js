// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Post2, Clubinfo, ClubArray, SchoolArray } = initSchema(schema);

export {
  Post2,
  Clubinfo,
  ClubArray,
  SchoolArray
};