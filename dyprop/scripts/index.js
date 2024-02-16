import * as DyProp from "./lib/DyProp";
const Id = "test";

// Save Dyprop Id with string data
DyProp.save(Id, String);

// Get Dyprop data with Id
DyProp.get(Id); // return array

// Get Dyprop Ids
DyProp.getIds(); // return array