import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Demo() {
  return (
    <Dialog open={true}>
      <DialogContent>
        <Select defaultValue="A">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="A">Option A</SelectItem>
              <SelectItem value="B">Option B</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </DialogContent>
    </Dialog>
  );
}
