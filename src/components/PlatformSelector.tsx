import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PlatformSelector = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Platforms" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">PC (Windows)</SelectItem>
        <SelectItem value="dark">Web Browser</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default PlatformSelector;
