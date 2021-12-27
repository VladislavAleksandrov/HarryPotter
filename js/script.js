import {useGlobal} from "./getGlobalData.js";
import {searchFilter} from "./searchFilter.js";
import {selector} from "./searchFilter.js";
import {editContent} from "./editContent.js";
import {input} from "./searchFilter.js";

export const data = await useGlobal();

editContent();
searchFilter(input.value, selector.value)

