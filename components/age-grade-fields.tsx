"use client";

import { useState } from "react";
import { Select } from "@/components/ui/input";

export function AgeGradeFields() {
  const [kind, setKind] = useState("grade");

  return (
    <div className="grid gap-3">
      <Select name="ageRequirementKind" value={kind} onChange={(event) => setKind(event.target.value)}>
        <option value="grade">Grade</option>
        <option value="age">Age</option>
      </Select>
      {kind === "grade" ? (
        <Select name="gradeLevel" defaultValue="9">
          <option value="9">Grade 9</option>
          <option value="10">Grade 10</option>
          <option value="11">Grade 11</option>
          <option value="12">Grade 12</option>
        </Select>
      ) : (
        <Select name="minAge" defaultValue="14">
          <option value="14">Age 14</option>
          <option value="15">Age 15</option>
          <option value="16">Age 16</option>
          <option value="17">Age 17</option>
          <option value="18">Age 18</option>
        </Select>
      )}
    </div>
  );
}
