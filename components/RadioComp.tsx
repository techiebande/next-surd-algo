import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function RadioComp({
  label,
  checked,
}: {
  label: string;
  checked: boolean;
}) {
  return (
    <RadioGroup defaultValue="true">
      <div className="flex items-center space-x-2">
        <RadioGroupItem checked={checked} value="true" id="r2" />
        <Label htmlFor="r2">{label}</Label>
      </div>
    </RadioGroup>
  );
}
