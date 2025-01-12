"use client"
import { motion, useCycle } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { ReactNode, useEffect, useRef, useState } from "react"
import { SIDENAV_ITEMS } from "../app/constants"
import { SideNavItem } from "../app/types"
import Image from "next/image"

type MenuItemWithSubMenuProps = {
  item: SideNavItem
  toggleOpen: () => void
}

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 100% 0)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}

const HeaderMobile = () => {
  const pathname = usePathname()
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)
  const [isOpen, toggleOpen] = useCycle(false, true)

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      className={`${isOpen ? "fixed" : "absolute"} inset-0 z-50 w-full overflow-y-auto min-[1024px]:hidden ${
        isOpen ? "" : "pointer-events-none"
      }`}
      ref={containerRef}
    >
      <motion.div className="fixed inset-0 h-screen w-full overflow-y-hidden bg-white p-0" variants={sidebar} />
      <motion.ul variants={variants} className="absolute grid w-full gap-3 px-10 py-16">
        {SIDENAV_ITEMS.map((item, idx) => {
          const isLastItem = idx === SIDENAV_ITEMS.length - 1 // Check if it's the last item

          return (
            <li key={idx}>
              {item.submenu ? (
                <MenuItemWithSubMenu item={item} toggleOpen={toggleOpen} />
              ) : (
                <MenuItem>
                  <Link
                    href={item.path}
                    onClick={() => toggleOpen()}
                    className={`flex w-full text-lg text-primary-500 ${item.path === pathname ? "font-bold" : ""}`}
                  >
                    {item.title}
                  </Link>
                </MenuItem>
              )}

              {!isLastItem && <MenuItem className="my-3 h-px w-full text-primary-500" />}
            </li>
          )
        })}
      </motion.ul>
      <MenuToggle toggle={toggleOpen} />
    </motion.nav>
  )
}

export default HeaderMobile

const MenuToggle = ({ toggle }: { toggle: any }) => (
  <button
    onClick={toggle}
    aria-label="mobile navbar menu"
    className="pointer-events-auto absolute right-6 top-4 z-30 p-4"
  >
    <svg className="fill-gray-500" fill="none" width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
)

const Path = (props: any) => (
  <motion.path fill="transparent" strokeWidth="2" stroke="hsl(0, 0%, 18%)" strokeLinecap="round" {...props} />
)

const MenuItem = ({ className, children }: { className?: string; children?: ReactNode }) => {
  return (
    <motion.div variants={MenuItemVariants} className={className}>
      {children}
    </motion.div>
  )
}

const MenuItemWithSubMenu: React.FC<MenuItemWithSubMenuProps> = ({ item, toggleOpen }) => {
  const pathname = usePathname()
  const [subMenuOpen, setSubMenuOpen] = useState(false)

  return (
    <>
      <MenuItem>
        <button className="flex w-full text-lg text-primary-500" onClick={() => setSubMenuOpen(!subMenuOpen)}>
          <div className="flex w-full flex-row items-center justify-between">
            <span className={`${pathname.includes(item.path) ? "font-bold" : ""}`}>{item.title}</span>
          </div>
        </button>
      </MenuItem>
      {item.images ? (
        <div className="mt-2 grid grid-cols-3 gap-2 text-center">
          {subMenuOpen && (
            <>
              {item.subMenuItems?.map((subItem, subIdx) =>
                subItem.image ? (
                  <MenuItem key={subIdx}>
                    <Link
                      href={subItem.path}
                      onClick={() => toggleOpen()}
                      className={`text-center text-sm leading-3 text-primary-500 ${
                        subItem.path === pathname ? "font-bold" : ""
                      }`}
                    >
                      <Image src={subItem.image} alt="can" width={100} height={100} className="w-full" />

                      {subItem.title}
                    </Link>
                  </MenuItem>
                ) : (
                  ""
                )
              )}
            </>
          )}
        </div>
      ) : (
        <div className="ml-2 mt-2 flex flex-col space-y-2">
          {subMenuOpen && (
            <>
              {item.subMenuItems?.map((subItem, subIdx) =>
                subItem.image ? (
                  ""
                ) : (
                  <MenuItem key={subIdx}>
                    <Link
                      href={subItem.path}
                      onClick={() => toggleOpen()}
                      className={`text-md text-primary-420 ${subItem.path === pathname ? "font-bold" : ""}`}
                    >
                      {subItem.title}
                    </Link>
                  </MenuItem>
                )
              )}
            </>
          )}
        </div>
      )}
    </>
  )
}

const MenuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      duration: 0.02,
    },
  },
}

const variants = {
  open: {
    transition: { staggerChildren: 0.02, delayChildren: 0.15 },
  },
  closed: {
    transition: { staggerChildren: 0.01, staggerDirection: -1 },
  },
}

const useDimensions = (ref: any) => {
  const dimensions = useRef({ width: 0, height: 0 })

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth
      dimensions.current.height = ref.current.offsetHeight
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref])

  return dimensions.current
}
