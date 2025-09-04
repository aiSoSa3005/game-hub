import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { useState } from "react";

interface Props {
  onChange: (v: string) => void;
}

const SortSelector = ({ onChange }: Props) => {
  const [value, setValue] = useState("");

  return (
    <Select
      value={value}
      onValueChange={(val) => {
        setValue(val);
        onChange(val);
      }}
    >
      <SelectTrigger className="w-[180px]">
        <span className="truncate text-gray-400">
          {value ? `Order by ${value}` : "Order by"}
        </span>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="relevance">Relevance</SelectItem>
        <SelectItem value="release">Release date</SelectItem>
        <SelectItem value="alphabetical">Alphabetical</SelectItem>
        <SelectItem value="popularity">Popularity</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SortSelector;
