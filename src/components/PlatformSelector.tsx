import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useState } from "react";

interface Props {
  onSelect: (platform: string) => void;
  platforms: string[] | undefined;
}

const PlatformSelector = ({ onSelect, platforms }: Props) => {
  const [platform, setPlatform] = useState("");
  return (
    <Select
      value={platform}
      onValueChange={(p) => {
        setPlatform(p);
        onSelect(p);
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Platforms" />
      </SelectTrigger>
      <SelectContent>
        {platforms &&
          platforms.map((p) => (
            <SelectItem key={p} value={p}>
              {p}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
};

export default PlatformSelector;
