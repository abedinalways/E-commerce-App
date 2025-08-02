'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import {
  Home,
  ShoppingBag,
  ShoppingCart,
  Menu,
  X,
  Sparkles,
  Package,
} from 'lucide-react';

const navItems = [
  {
    name: 'Home',
    href: '/',
    icon: Home,
    color: 'from-blue-400 to-blue-600',
  },
  {
    name: 'Orders',
    href: '/Orders',
    icon: Package,
    color: 'from-green-400 to-emerald-500',
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const pathname = usePathname();
  const totalItems = useSelector((state: RootState) => state.cart.totalItems);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 25,
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 25,
      },
    },
    hover: {
      y: -2,
      scale: 1.05,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 25,
      },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.4,
        ease: 'easeOut',
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 25,
      },
    },
  };

  return (
    <>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'navbar-gradient-bg-scrolled backdrop-blur-lg border-b border-gray-700/50 shadow-2xl'
            : 'navbar-gradient-bg backdrop-blur-md border-b border-gray-700/30'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div variants={logoVariants} whileHover="hover">
              <Link href="/" className="flex items-center space-x-3 group">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="relative"
                >
                  <div className="w-10 h-10 gradient-purple-pink-red rounded-xl flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute inset-0 gradient-purple-pink-red rounded-xl opacity-0 group-hover:opacity-75 blur-lg transition-opacity duration-300"></div>
                </motion.div>
                <div>
                  <motion.h1 className="text-2xl font-black logo-gradient">
                    ShopSphere
                  </motion.h1>
                  <motion.p className="text-xs text-gray-400 font-medium">
                    Your Shopping Universe
                  </motion.p>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    variants={navItemVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    transition={{ delay: index * 0.1 }}
                    onHoverStart={() => setHoveredItem(item.href)}
                    onHoverEnd={() => setHoveredItem(null)}
                    className="relative"
                  >
                    <Link
                      href={item.href}
                      className={`relative px-4 py-3 rounded-xl flex items-center space-x-2 text-sm font-medium transition-all duration-300 group ${
                        isActive
                          ? 'text-white bg-gray-800/80 shadow-lg'
                          : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                      }`}
                    >
                      <motion.div
                        animate={{
                          rotate: hoveredItem === item.href ? 360 : 0,
                          scale: hoveredItem === item.href ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <item.icon
                          className={`w-4 h-4 ${
                            isActive
                              ? `bg-gradient-to-r ${item.color} bg-clip-text text-transparent`
                              : ''
                          }`}
                        />
                      </motion.div>
                      <span
                        className={
                          isActive
                            ? `bg-gradient-to-r ${item.color} bg-clip-text text-transparent font-bold`
                            : ''
                        }
                      >
                        {item.name}
                      </span>

                      {/* Active indicator */}
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-10 rounded-xl`}
                          transition={{
                            type: 'spring',
                            stiffness: 500,
                            damping: 30,
                          }}
                        />
                      )}

                      {/* Hover effect */}
                      <AnimatePresence>
                        {hoveredItem === item.href && !isActive && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-5 rounded-xl`}
                          />
                        )}
                      </AnimatePresence>
                    </Link>
                  </motion.div>
                );
              })}

              {/* Cart Link with Special Styling */}
              <motion.div
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                transition={{ delay: navItems.length * 0.1 }}
                onHoverStart={() => setHoveredItem('/Checkout')}
                onHoverEnd={() => setHoveredItem(null)}
                className="relative"
              >
                <Link
                  href="/Checkout"
                  className={`relative px-4 py-3 rounded-xl flex items-center space-x-2 text-sm font-medium transition-all duration-300 group ${
                    pathname === '/Checkout'
                      ? 'text-white bg-gray-800/80 shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  <motion.div
                    animate={{
                      rotate: hoveredItem === '/Checkout' ? 360 : 0,
                      scale: hoveredItem === '/Checkout' ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <ShoppingCart
                      className={`w-4 h-4 ${
                        pathname === '/Checkout'
                          ? 'bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent'
                          : ''
                      }`}
                    />
                    {totalItems > 0 && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold shadow-lg"
                      >
                        {totalItems}
                      </motion.span>
                    )}
                  </motion.div>
                  <span
                    className={
                      pathname === '/Checkout'
                        ? 'bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent font-bold'
                        : ''
                    }
                  >
                    Cart
                  </span>

                  {/* Active indicator */}
                  {pathname === '/Checkout' && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 opacity-10 rounded-xl"
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Hover effect */}
                  <AnimatePresence>
                    {hoveredItem === '/Checkout' &&
                      pathname !== '/Checkout' && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 opacity-5 rounded-xl"
                        />
                      )}
                  </AnimatePresence>
                </Link>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden relative p-3 text-gray-300 hover:text-white bg-gray-800/50 hover:bg-gray-700/50 rounded-xl transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="md:hidden bg-gray-900/98 backdrop-blur-xl border-t border-gray-700/50"
            >
              <div className="max-w-7xl mx-auto px-4 py-6">
                <motion.div className="grid grid-cols-1 gap-2">
                  {navItems.map((item, index) => {
                    const isActive = pathname === item.href;
                    return (
                      <motion.div
                        key={item.href}
                        variants={mobileItemVariants}
                        custom={index}
                      >
                        <Link
                          href={item.href}
                          className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 group ${
                            isActive
                              ? `bg-gradient-to-r ${item.color} bg-opacity-20 border border-current border-opacity-30`
                              : 'hover:bg-gray-800/50 border border-transparent'
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                            className={`p-2 rounded-lg ${
                              isActive
                                ? `bg-gradient-to-r ${item.color}`
                                : 'bg-gray-800 group-hover:bg-gray-700'
                            }`}
                          >
                            <item.icon className="w-5 h-5 text-white" />
                          </motion.div>
                          <div className="flex-1">
                            <div
                              className={`font-semibold ${
                                isActive
                                  ? `bg-gradient-to-r ${item.color} bg-clip-text text-transparent`
                                  : 'text-white group-hover:text-blue-300'
                              }`}
                            >
                              {item.name}
                            </div>
                          </div>
                          <motion.div
                            animate={{
                              x: isActive ? 0 : -10,
                              opacity: isActive ? 1 : 0,
                            }}
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color}`}
                          />
                        </Link>
                      </motion.div>
                    );
                  })}

                  {/* Mobile Cart Link */}
                  <motion.div
                    variants={mobileItemVariants}
                    custom={navItems.length}
                  >
                    <Link
                      href="/Checkout"
                      className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 group ${
                        pathname === '/Checkout'
                          ? 'bg-gradient-to-r from-orange-400 to-red-500 bg-opacity-20 border border-current border-opacity-30'
                          : 'hover:bg-gray-800/50 border border-transparent'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                        className={`p-2 rounded-lg relative ${
                          pathname === '/Checkout'
                            ? 'bg-gradient-to-r from-orange-400 to-red-500'
                            : 'bg-gray-800 group-hover:bg-gray-700'
                        }`}
                      >
                        <ShoppingCart className="w-5 h-5 text-white" />
                        {totalItems > 0 && (
                          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold">
                            {totalItems}
                          </span>
                        )}
                      </motion.div>
                      <div className="flex-1">
                        <div
                          className={`font-semibold ${
                            pathname === '/Checkout'
                              ? 'bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent'
                              : 'text-white group-hover:text-blue-300'
                          }`}
                        >
                          Cart {totalItems > 0 && `(${totalItems})`}
                        </div>
                      </div>
                      <motion.div
                        animate={{
                          x: pathname === '/Checkout' ? 0 : -10,
                          opacity: pathname === '/Checkout' ? 1 : 0,
                        }}
                        className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-red-500"
                      />
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav> 
    </>
  );
};

export default Navbar;
