import { SvgIcon, SvgIconProps } from "@mui/material"
import React from "react"

export default function ShoppingCartOutlined(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.55 13C17.3 13 17.96 12.59 18.3 11.97L21.88 5.48C22.25 4.82 21.77 4 21.01 4H6.21L5.27 2H2V4H4L7.6 11.59L6.25 14.03C5.52 15.37 6.48 17 8 17H20V15H8L9.1 13H16.55ZM7.16 6H19.31L16.55 11H9.53L7.16 6ZM8 18C6.9 18 6.01 18.9 6.01 20C6.01 21.1 6.9 22 8 22C9.1 22 10 21.1 10 20C10 18.9 9.1 18 8 18ZM18 18C16.9 18 16.01 18.9 16.01 20C16.01 21.1 16.9 22 18 22C19.1 22 20 21.1 20 20C20 18.9 19.1 18 18 18Z"
          fill="black"
          fill-opacity="0.54"
        />
      </svg>
    </SvgIcon>
  )
}
