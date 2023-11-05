import FormElementSidebar from "./FormElementSidebar";
import { FormElements } from "./FormElements";
import PropertiesFormSidebar from "./PropertiesFormSidebar";
import SidebarBtnElement from "./SidebarBtnElement";
import useDesigner from "./hooks/useDesigner";

type Props = {};

function DesignerSidebar({}: Props) {
  const { selectedElement } = useDesigner();

  return (
    <aside className="w-[400px] max-w-[400px flex flex-col flex-grow border-l-2 border-muted p-4 bg-background overflow-y-auto h-full">
      {!selectedElement && <FormElementSidebar />}
      {selectedElement && <PropertiesFormSidebar />}
    </aside>
  );
}

export default DesignerSidebar;
