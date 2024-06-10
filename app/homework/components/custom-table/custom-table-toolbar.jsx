import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Cross2Icon } from "@radix-ui/react-icons";
import React from "react";
import CustomTableViewOptions from "./custom-table-view-options";
import Select from "@/components/select";
import { classrooms, subjects } from "../../layout";

const CustomTableToolbar = ({ table }) => {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between flex-wrap sm:flex-nowrap">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Search homework..."
          value={table.getColumn("title")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />

        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>

      <div className="flex gap-2 flex-wrap sm:hidden">
        <Select list={classrooms} title="Classroom" />
        <Select list={subjects} title="Subject" />
      </div>

      <CustomTableViewOptions table={table} />
    </div>
  );
};

export default CustomTableToolbar;
