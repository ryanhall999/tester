import React, { useState } from "react";
import moment from "moment";

const now = moment().startOf("week");
const week = [now];

let i = 0;
while (week.length < 7) {
	week.push(moment(now).add("day", ++i));
}

export default function ThisWeeek() {
	return <div></div>;
}
