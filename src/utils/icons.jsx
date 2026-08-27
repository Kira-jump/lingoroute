import {
  Hand, UserCircle, Globe, Users, UserRound, Key, Hash, Clock, Calendar,
  Palette, Package, MousePointer2, Puzzle, Footprints, PenLine,
  ShoppingCart, Coins, Scale, UtensilsCrossed, Pizza, Receipt,
  Bus, Compass, Ticket, CloudSun, Gamepad2, ClipboardList,
  Briefcase, FolderKanban, Newspaper, ThumbsUp, Handshake, MessageCircle,
  History, Palmtree, BookOpen, FastForward, Target, Sparkles,
  Plane, Luggage, LifeBuoy, Stethoscope, Thermometer, Pill,
  Drama, Megaphone, Scissors, Tv, Repeat, Lightbulb, Brain,
  Smile, Heart, Link2, Laugh, Crown, Lock, CheckCircle2,
  Flame, Star, Home as HomeIcon, Trophy, CircleUserRound
} from 'lucide-react'

const ICONS = {
  Hand, UserCircle, Globe, Users, UserRound, Key, Hash, Clock, Calendar,
  Palette, Package, MousePointer2, Puzzle, Footprints, PenLine,
  ShoppingCart, Coins, Scale, UtensilsCrossed, Pizza, Receipt,
  Bus, Compass, Ticket, CloudSun, Gamepad2, ClipboardList,
  Briefcase, FolderKanban, Newspaper, ThumbsUp, Handshake, MessageCircle,
  History, Palmtree, BookOpen, FastForward, Target, Sparkles,
  Plane, Luggage, LifeBuoy, Stethoscope, Thermometer, Pill,
  Drama, Megaphone, Scissors, Tv, Repeat, Lightbulb, Brain,
  Smile, Heart, Link2, Laugh, Crown, Lock, CheckCircle2,
  Flame, Star, HomeIcon, Trophy, CircleUserRound
}

export default function AppIcon({ name, className = 'w-6 h-6', ...props }) {
  const Cmp = ICONS[name] || BookOpen
  return <Cmp className={className} {...props} />
}
