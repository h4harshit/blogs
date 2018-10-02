import Typography from 'typography'
import gray from 'gray-percentage'

const typography = new Typography({
  baseFontSize: '18px',
  overrideStyles: ({ rhythm }) => ({
    blockquote: {
      borderLeft: `4px solid ${gray(87)}`,
      color: gray(47),
      marginTop: 0,
      marginRight: 0,
      paddingRight: `10px`,
      marginLeft: 0,
      paddingLeft: `calc(${rhythm(1 / 2)} - 1px)`,
    }
  }),
})

export default typography
