import * as comps from '../dynamicComps'

export const DynamicComponent = ({ componentName, type, ...props }) => {
  const comp = componentName+type

  const UtilComp = comps[comp];

  if (!UtilComp) {
    return <div>Invalid Component type</div>;
  }
  return <UtilComp {...props} />;
};