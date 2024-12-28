import React from 'react';
import { motion } from 'framer-motion';
import {
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Stack, 
  IconButton, 
  Divider, 
  Chip, 
  useTheme, 
  Link, 
  Avatar,
} from '@mui/material';
import {
  Phone,
  Email,
  WhatsApp,
  LinkedIn,
  LocationOn,
  Business,
  EmojiObjects,
  Store,
} from '@mui/icons-material';
import bmLogo from '../assets/bm.png';
import profilePhoto from '../assets/luiz.jpeg';

const BusinessCard = () => {
  const theme = useTheme();

  const contactInfo = {
    name: 'Luiz Oscar',
    position: 'Consultor de Vendas',
    company: 'BM TECH',
    address: 'Avenida 13, nº 577, Centro, Guaíra - SP, 14790-000',
    specialties: ['Energia Solar', 'Projetos Fotovoltaicos', 'Eficiência Energética'],
    phone: '+55 (XX) XXXXX-XXXX',
    email: 'luiz.oscar@bmtech.com',
    linkedin: 'linkedin.com/in/luizoscar',
  };

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Card
        sx={{
          maxWidth: 400,
          width: '100%',
          mx: 'auto',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#ffffff',
          boxShadow: '0 8px 32px rgba(26, 35, 126, 0.12)',
          border: '1px solid rgba(26, 35, 126, 0.08)',
        }}
      >
        <CardContent sx={{ position: 'relative', p: { xs: 2, sm: 3 } }}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            {/* Logo at top */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                component="img"
                src={bmLogo}
                alt="BM TECH Logo"
                sx={{
                  width: 150,
                  height: 'auto',
                  mb: 4,
                  filter: 'drop-shadow(0 4px 8px rgba(26, 35, 126, 0.15))',
                }}
              />
            </motion.div>

            {/* Profile Photo */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Avatar
                src={profilePhoto}
                alt="Luiz Oscar"
                sx={{
                  width: 130,
                  height: 130,
                  margin: '0 auto 28px',
                  border: '4px solid',
                  borderColor: 'primary.main',
                  boxShadow: '0 8px 24px rgba(26, 35, 126, 0.2)',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              />
            </motion.div>

            {/* Name and Position */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Typography 
                variant="h1" 
                sx={{ 
                  fontSize: '2.4rem',
                  fontWeight: 'bold',
                  mb: 2,
                  textShadow: '0 2px 10px rgba(26, 35, 126, 0.1)',
                }}
              >
                {contactInfo.name}
              </Typography>
              <Typography 
                variant="h2" 
                sx={{ 
                  fontSize: '1.1rem',
                  letterSpacing: '0.2em',
                  mb: 3,
                  color: 'primary.main',
                  opacity: 0.9,
                }}
              >
                {contactInfo.position}
              </Typography>
            </motion.div>

            {/* Company and Specialties */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Stack spacing={2.5} sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                  <Business sx={{ color: 'primary.main', fontSize: '1.3rem' }} />
                  <Typography variant="subtitle1" sx={{ color: 'primary.main', fontWeight: 600 }}>
                    BM TECH
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                  <EmojiObjects sx={{ color: 'primary.main', fontSize: '1.3rem' }} />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Especialistas em energia solar
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                  <Store sx={{ color: 'primary.main', fontSize: '1.3rem' }} />
                  <Typography variant="body1" sx={{ maxWidth: '80%', fontSize: '0.9rem', opacity: 0.9 }}>
                    {contactInfo.address}
                  </Typography>
                </Box>
              </Stack>
            </motion.div>

            {/* Specialties Chips */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: 'center', mb: 4, px: 2 }}>
                {contactInfo.specialties.map((specialty, index) => (
                  <Chip
                    key={index}
                    label={specialty}
                    size="small"
                    sx={{
                      py: 1.2,
                      px: 0.5,
                      borderRadius: '6px',
                      backgroundColor: 'rgba(26, 35, 126, 0.04)',
                      border: '1px solid rgba(26, 35, 126, 0.08)',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        backgroundColor: 'rgba(26, 35, 126, 0.08)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 8px rgba(26, 35, 126, 0.1)',
                      },
                      '& .MuiChip-label': {
                        px: 1.5,
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        color: 'primary.main',
                      },
                    }}
                  />
                ))}
              </Box>
            </motion.div>

            <Divider sx={{ my: 4, width: '70%', mx: 'auto', opacity: 0.7 }} />

            {/* Contact Information */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Stack spacing={2.5} alignItems="center" sx={{ mb: 4 }}>
                <Link 
                  href="tel:17991960585"
                  underline="none"
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 1.5,
                    color: 'primary.main',
                    py: 1,
                    px: 3,
                    borderRadius: 3,
                    backgroundColor: 'rgba(26, 35, 126, 0.04)',
                    transition: 'all 0.3s ease-in-out',
                    border: '1px solid rgba(26, 35, 126, 0.08)',
                    '&:hover': {
                      backgroundColor: 'rgba(26, 35, 126, 0.08)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(26, 35, 126, 0.12)',
                    }
                  }}
                >
                  <Phone sx={{ fontSize: '1.4rem' }} />
                  <Typography sx={{ fontWeight: 500 }}>(17) 99196-0585</Typography>
                </Link>
                
                <Link 
                  href="https://wa.me/17991960585"
                  target="_blank"
                  underline="none"
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 1.5,
                    color: '#075e54', 
                    py: 1,
                    px: 3,
                    borderRadius: 3,
                    backgroundColor: 'rgba(37, 211, 102, 0.05)',
                    transition: 'all 0.3s ease-in-out',
                    border: '1px solid rgba(37, 211, 102, 0.1)',
                    '&:hover': {
                      backgroundColor: 'rgba(37, 211, 102, 0.1)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(37, 211, 102, 0.15)',
                    }
                  }}
                >
                  <WhatsApp sx={{ fontSize: '1.4rem' }} />
                  <Typography sx={{ fontWeight: 500 }}>Faça seu orçamento comigo!</Typography>
                </Link>
              </Stack>
            </motion.div>

            {/* Footer */}
            <Box 
              sx={{ 
                mt: 4, 
                pt: 3,
                borderTop: '1px solid rgba(26, 35, 126, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1.5,
                backgroundColor: 'rgba(26, 35, 126, 0.01)',
                py: 3,
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '40%',
                  height: '1px',
                  background: 'linear-gradient(to right, rgba(26, 35, 126, 0.01), rgba(26, 35, 126, 0.08), rgba(26, 35, 126, 0.01))',
                }
              }}
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <Stack spacing={2} alignItems="center">
                  <Box
                    component="img"
                    src={bmLogo}
                    alt="BM TECH Logo"
                    sx={{
                      width: 70,
                      height: 'auto',
                      opacity: 0.85,
                      filter: 'drop-shadow(0 2px 4px rgba(26, 35, 126, 0.1))',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        opacity: 1,
                      }
                    }}
                  />
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      color: 'primary.main',
                      fontStyle: 'italic',
                      textAlign: 'center',
                      opacity: 0.8,
                      maxWidth: '80%',
                      fontSize: '0.85rem',
                      letterSpacing: '0.02em',
                      lineHeight: 1.6,
                    }}
                  >
                    "Transformando energia solar em soluções sustentáveis"
                  </Typography>
                </Stack>
              </motion.div>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default BusinessCard;
