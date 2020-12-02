// デバッグ用
export const END_POINT = process.env.NODE_ENV === 'production' ? '' : ''

export const isProduction = process.env.NODE_ENV === 'production'

// export const tourConfig = [
//   {
//     selector: '.explanation',
//     content: () => (
//       <Text>
//         The <Tooltip data-tooltip="this helper ⬇">tourist guide</Tooltip> could
//         be positioned where you want.
//         <br /> In this case will try to stay in the <strong>
//           left side
//         </strong>{" "}
//         if there's available space, otherwise will{" "}
//         <strong>auto position</strong>.
//       </Text>
//     ),
//     position: "left"
//   },
//   {
//     selector: '.title',
//     content: `And this is our cool bus...`,
//     // position: 'top',
//   },
//   {
//     selector: '.aaa',
//     content: `And this is our cool bus...`,
//     // position: 'top',
//   },
// ]
