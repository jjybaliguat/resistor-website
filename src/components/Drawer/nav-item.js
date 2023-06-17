import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Button, ListItem } from '@mui/material';

export const NavItem = (props) => {
  const { href, icon, title, ...others } = props;
  const router = useRouter();
  const active = href ? (router.pathname === href) : false;

  return (
    <ListItem
      disableGutters
      sx={{
        display: 'flex',
        mb: 0.5,
        py: 0,
        px: 1,
      }}
      {...others}
    >
      <NextLink
        href={href}
        passHref
      >
        <Button
          // component="a"
          // startIcon={icon}
          disableRipple
          sx={{
            backgroundColor: active && 'action.hover',
            borderRadius: 1,
            color: active ? 'primary.main' : 'grey',
            fontWeight: active && 'fontWeightBold',
            justifyContent: 'flex-start',
            px: 3,
            py: 2,
            textAlign: 'left',
            textTransform: 'none',
            width: '185px',
            // '& .MuiButton-startIcon': {
            //   color: active ? 'secondary' : 'neutral.400'
            // },
            '&:hover': {
              backgroundColor: 'gray.light',
              color: "primary.main"
            }
          }}
        >
            {title}
        </Button>
      </NextLink>
    </ListItem>
  );
};

NavItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.node,
  title: PropTypes.string
};
