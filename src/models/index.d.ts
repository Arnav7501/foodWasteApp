import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type Post2MetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ClubinfoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ClubArrayMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SchoolArrayMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Post2 {
  readonly id: string;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly number_of_likes?: number | null;
  readonly number_of_shares?: number | null;
  readonly name?: string | null;
  readonly reports?: number | null;
  readonly rating?: number | null;
  readonly identifier?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Post2, Post2MetaData>);
  static copyOf(source: Post2, mutator: (draft: MutableModel<Post2, Post2MetaData>) => MutableModel<Post2, Post2MetaData> | void): Post2;
}

export declare class Clubinfo {
  readonly id: string;
  readonly identifier?: string | null;
  readonly Presidents?: string | null;
  readonly MeetingTimes?: string | null;
  readonly HowToSignUp?: string | null;
  readonly TimeCommitment?: string | null;
  readonly DescriptionOfClub?: string | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Clubinfo, ClubinfoMetaData>);
  static copyOf(source: Clubinfo, mutator: (draft: MutableModel<Clubinfo, ClubinfoMetaData>) => MutableModel<Clubinfo, ClubinfoMetaData> | void): Clubinfo;
}

export declare class ClubArray {
  readonly id: string;
  readonly identifier?: string | null;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ClubArray, ClubArrayMetaData>);
  static copyOf(source: ClubArray, mutator: (draft: MutableModel<ClubArray, ClubArrayMetaData>) => MutableModel<ClubArray, ClubArrayMetaData> | void): ClubArray;
}

export declare class SchoolArray {
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<SchoolArray, SchoolArrayMetaData>);
  static copyOf(source: SchoolArray, mutator: (draft: MutableModel<SchoolArray, SchoolArrayMetaData>) => MutableModel<SchoolArray, SchoolArrayMetaData> | void): SchoolArray;
}