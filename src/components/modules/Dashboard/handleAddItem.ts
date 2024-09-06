// const handleAddItem = (type: DataItemContent_types, content: string) => {
//   const newItem = {
//     i: getUUID(),
//     x: 0,
//     y: Infinity, // You might want to calculate initial 'y' to avoid stacking on Infinity.
//     w: 2,
//     h: 2,
//     chartType: 'Line', // Default chart type for new items
//   };

//   setLayouts((prevLayouts: LayoutsStateType) => {
//     const updatedLayouts: LayoutsStateType = { ...prevLayouts };
    
//     // Add the new item to all existing breakpoints, not just the current one
//     Object.keys(updatedLayouts).forEach(bp => {
//       // Check if the breakpoint already has a layout array initialized
//       if (!updatedLayouts[bp]) {
//         updatedLayouts[bp] = []; // Initialize if not present
//       }
//       updatedLayouts[bp].push({
//         ...newItem,
//         y: updatedLayouts[bp].reduce((maxY, item) => Math.max(item.y + item.h, maxY), 0) // Calculate new 'y' to stack properly
//       });
//     });

//     return updatedLayouts;
//   });
// };
