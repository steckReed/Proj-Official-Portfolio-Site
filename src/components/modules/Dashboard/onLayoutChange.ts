// const onLayoutChange = (newLayout, allLayouts) => {
//   setLayouts(prevLayouts => ({
//     ...prevLayouts,
//     ...Object.keys(allLayouts).reduce((acc, key) => {
//       // If the current breakpoint's layout array doesn't exist in the previous layouts,
//       // initialize it by copying from an existing layout that does include the custom properties
//       if (!prevLayouts[key]) {
//         // Use another layout as a template, typically 'lg' is a safe bet if it exists
//         const templateLayout = prevLayouts['lg'] || [];
//         // Initialize with a mapped version of the template that only takes ids to avoid position conflicts
//         acc[key] = allLayouts[key].map(item => {
//           const templateItem = templateLayout.find(t => t.i === item.i);
//           return templateItem ? {
//             ...item,
//             chartType: templateItem.chartType // Preserve chartType from the template, adjust for more properties as needed
//           } : {
//             ...item,
//             chartType: 'default' // Provide a default chartType if not found
//           };
//         });
//       } else {
//         // If it exists, update it by merging existing items with new layout changes
//         acc[key] = allLayouts[key].map(layoutItem => {
//           const existingItem = prevLayouts[key].find(prevItem => prevItem.i === layoutItem.i);
//           return existingItem ? {
//             ...existingItem,
//             ...layoutItem,
//           } : {
//             ...layoutItem,
//             chartType: 'default' // Provide a default if no existing item is found
//           };
//         });
//       }
//       return acc;
//     }, {}),
//   }));
// };
