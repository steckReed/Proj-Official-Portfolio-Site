'use client';

import CustomChip from '@/components/elements/CustomChip/CustomChip';
import Image from "next/image";
import ResponsiveImage from '@/components/elements/ResponsiveImage';
import LegendContainer from '@/components/modules/LegendContainer/LegendContainer';
import { useMTGCard } from '@/hooks/useMTGCard';
import { MTGCardProps } from '@/types/types';
import { Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion, useMotionValue, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import useRefScrollPercentage from '@/hooks/useRefScrollPercentage';
import IdeasToWebApps from '@/components/modules/IdeasToWebApps/IdeasToWebApps';

const SectionDataToDesign = () => {
  // const { data: mtgCard, isLoading, error } = useMTGCard()

  const mtgCard: MTGCardProps[] = 
    [{ "object": "card", "id": "4ff97c69-6a6b-401c-b0a1-55fa81045d19", "oracle_id": "e0445c80-fa53-4c3e-881e-940e9fce7f57", "multiverse_ids": [574564], "mtgo_id": 102644, "arena_id": 82136, "tcgplayer_id": 282758, "cardmarket_id": 671344, "name": "Braids, Arisen Nightmare", "lang": "en", "released_at": "2022-09-09", "uri": "https://api.scryfall.com/cards/4ff97c69-6a6b-401c-b0a1-55fa81045d19", "scryfall_uri": "https://scryfall.com/card/dmu/84/braids-arisen-nightmare?utm_source=api", "layout": "normal", "highres_image": true, "image_status": "highres_scan", "image_uris": { "small": "https://cards.scryfall.io/small/front/4/f/4ff97c69-6a6b-401c-b0a1-55fa81045d19.jpg?1673307016", "normal": "https://cards.scryfall.io/normal/front/4/f/4ff97c69-6a6b-401c-b0a1-55fa81045d19.jpg?1673307016", "large": "https://cards.scryfall.io/large/front/4/f/4ff97c69-6a6b-401c-b0a1-55fa81045d19.jpg?1673307016", "png": "https://cards.scryfall.io/png/front/4/f/4ff97c69-6a6b-401c-b0a1-55fa81045d19.png?1673307016", "art_crop": "https://cards.scryfall.io/art_crop/front/4/f/4ff97c69-6a6b-401c-b0a1-55fa81045d19.jpg?1673307016", "border_crop": "https://cards.scryfall.io/border_crop/front/4/f/4ff97c69-6a6b-401c-b0a1-55fa81045d19.jpg?1673307016" }, "mana_cost": "{1}{B}{B}", "cmc": 3, "type_line": "Legendary Creature — Nightmare", "oracle_text": "At the beginning of your end step, you may sacrifice an artifact, creature, enchantment, land, or planeswalker. If you do, each opponent may sacrifice a permanent that shares a card type with it. For each opponent who doesn't, that player loses 2 life and you draw a card.", "power": "3", "toughness": "3", "colors": ["B"], "color_identity": ["B"], "keywords": [], "legalities": { "standard": "legal", "future": "legal", "historic": "legal", "timeless": "legal", "gladiator": "legal", "pioneer": "legal", "explorer": "legal", "modern": "legal", "legacy": "legal", "pauper": "not_legal", "vintage": "legal", "penny": "not_legal", "commander": "legal", "oathbreaker": "legal", "standardbrawl": "legal", "brawl": "legal", "alchemy": "legal", "paupercommander": "not_legal", "duel": "legal", "oldschool": "not_legal", "premodern": "not_legal", "predh": "not_legal" }, "games": ["paper", "arena", "mtgo"], "reserved": false, "foil": true, "nonfoil": true, "finishes": ["nonfoil", "foil"], "oversized": false, "promo": false, "reprint": false, "variation": false, "set_id": "4e47a6cd-cdeb-4b0f-8f24-cfe1a0127cb3", "set": "dmu", "set_name": "Dominaria United", "set_type": "expansion", "set_uri": "https://api.scryfall.com/sets/4e47a6cd-cdeb-4b0f-8f24-cfe1a0127cb3", "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Admu&unique=prints", "scryfall_set_uri": "https://scryfall.com/sets/dmu?utm_source=api", "rulings_uri": "https://api.scryfall.com/cards/4ff97c69-6a6b-401c-b0a1-55fa81045d19/rulings", "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3Ae0445c80-fa53-4c3e-881e-940e9fce7f57&unique=prints", "collector_number": "84", "digital": false, "rarity": "rare", "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7", "artist": "Heonhwa Choe", "artist_ids": ["ce415f9e-8a20-4d64-bcba-2b1b7e94012e"], "illustration_id": "578e2ea3-068c-4c4c-91a2-343074925feb", "border_color": "black", "frame": "2015", "frame_effects": ["legendary"], "security_stamp": "oval", "full_art": false, "textless": false, "booster": true, "story_spotlight": false, "edhrec_rank": 301, "preview": { "source": "Wizards of the Coast", "source_uri": "https://www.twitch.tv/videos/1565562937", "previewed_at": "2022-08-18" }, "prices": { "usd": "6.04", "usd_foil": "6.72", "usd_etched": null, "eur": "4.74", "eur_foil": "5.46", "tix": "0.02" }, "related_uris": { "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=574564&printed=false", "tcgplayer_infinite_articles": "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Darticle%26game%3Dmagic%26partner%3Dscryfall%26q%3DBraids%252C%2BArisen%2BNightmare", "tcgplayer_infinite_decks": "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Ddeck%26game%3Dmagic%26partner%3Dscryfall%26q%3DBraids%252C%2BArisen%2BNightmare", "edhrec": "https://edhrec.com/route/?cc=Braids%2C+Arisen+Nightmare" }, "purchase_uris": { "tcgplayer": "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&u=https%3A%2F%2Fwww.tcgplayer.com%2Fproduct%2F282758%3Fpage%3D1", "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Dominaria-United/Braids-Arisen-Nightmare?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall", "cardhoarder": "https://www.cardhoarder.com/cards/102644?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall" } }]
  ;


  return(<>
    <Box sx={{ display:'flex', alignItems:'center', flexDirection:'column', margin:'0 auto', gap:'clamp(45px, 25vh, 125px)' }}>

      {/* Ideas to Web Apps (Vertical Carousel) */}
      <IdeasToWebApps/>
      
      {/* Development & Version Control */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems:'center', minHeight:'300vh' }}>
        <motion.div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <GitHubIcon sx={{ fontSize: 'clamp(175px, 45vw, 300px)', color: '#202328' }} />

          <h1
            style={{
              textAlign: 'center',
              letterSpacing: '-1px',
              fontWeight: 'bold',
              fontSize: 'clamp(48px, 8vw, 60px)',
            }}
          >
            Version Control
          </h1>
          <h4
            style={{
              position: 'relative',
              top: '-2px',
              textAlign: 'center',
              letterSpacing: '2px',
              fontWeight: 'normal',
              fontSize: 'clamp(22px, 5vw, 26px)'
            }}
          >
            Git Good
          </h4>
        </motion.div>

        
      </Box>
    </Box>
  </>)
}

export default SectionDataToDesign;
