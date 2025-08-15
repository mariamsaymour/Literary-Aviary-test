import { useState, useEffect, useMemo } from 'react';
import { BirdData } from '../types/bird';
import { User, CreateUserRequest, UpdateUserRequest, ChangePasswordRequest } from '../types/user';
import { UserManager } from '../utils/userManager';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from './ui/alert-dialog';
import { Badge } from './ui/badge';
import { ScrollArea } from './ui/scroll-area';
import { Separator } from './ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { Checkbox } from './ui/checkbox';
import { Plus, Edit2, Trash2, Download, Upload, Eye, Save, X, LogOut, Info, Grid3X3, Table, FileText, Users, Settings2, ArrowUpDown, ArrowUp, ArrowDown, FileX, Merge, Copy, Check, AlertTriangle, EyeOff, BarChart3, ArrowUpLeft, Menu, UserPlus, Lock, Mail, Shield, User as UserIcon, Bird, Clock, Heart, Globe, Feather, Clock, Book, PenTool, Compass, Bookmark, Search, Filter, Columns } from 'lucide-react';
import svgPaths from '../imports/svg-9j2ik11zho';
import desktopSvgPaths from '../imports/svg-zv29thfbyg';
import columnsButtonSvgPaths from '../imports/svg-am6aq9ttj6';
import sidebarSvgPaths from '../imports/svg-b06h4eok30';
import { toast } from 'sonner@2.0.3';
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Legend } from 'recharts';
import { getBirdFamily, getTopFamilies, getFamilyDisplayName, getFamilyLatinName } from '../utils/birdTaxonomy';

// Utility function to shorten author names responsively
const shortenAuthorName = (fullName: string, format: 'full' | 'abbreviated' | 'lastname', maxLength?: number) => {
  if (!fullName) return fullName;
  
  let result = '';
  
  switch (format) {
    case 'full':
      result = fullName;
      break;
    case 'abbreviated':
      // Convert "William Butler Yeats" to "W. B. Yeats"
      const parts = fullName.split(' ');
      if (parts.length <= 1) {
        result = fullName;
      } else {
        const lastIndex = parts.length - 1;
        const abbreviatedParts = parts.map((part, index) => {
          if (index === lastIndex) {
            return part; // Keep last name full
          } else {
            return `${part.charAt(0)}.`; // Abbreviate all other names
          }
        });
        result = abbreviatedParts.join(' ');
      }
      break;
    case 'lastname':
      // Return just the last name
      const nameParts = fullName.split(' ');
      result = nameParts[nameParts.length - 1];
      break;
    default:
      result = fullName;
  }
  
  // Apply ellipsis truncation if maxLength is specified
  if (maxLength && result.length > maxLength) {
    result = result.substring(0, maxLength - 3) + '...';
  }
  
  return result;
};

// Responsive Author Display Component
const ResponsiveAuthor = ({ author }: { author: string }) => (
  <>
    {/* Full name on large screens */}
    <span className="hidden lg:inline font-['Crimson_Text:SemiBold'] font-semibold text-[#160e0c] text-[15.75px] leading-normal" title={author}>
      {author}
    </span>
    {/* Abbreviated name on medium screens with ellipsis after 10-13 characters */}
    <span className="hidden md:inline lg:hidden font-['Crimson_Text:SemiBold'] font-semibold text-[#160e0c] text-[15.75px] leading-normal" title={author}>
      {shortenAuthorName(author, 'abbreviated', 13)}
    </span>
    {/* Last name only on small screens */}
    <span className="inline md:hidden font-['Crimson_Text:SemiBold'] font-semibold text-[#160e0c] text-[15.75px] leading-normal" title={author}>
      {shortenAuthorName(author, 'lastname', 10)}
    </span>
  </>
);

// Responsive Work/Source Display Component
const ResponsiveWork = ({ source }: { source: string }) => {
  const shortenWork = (title: string, maxLength: number) => {
    if (title.length <= maxLength) return title;
    return title.substring(0, maxLength - 3) + '...';
  };

  return (
    <>
      {/* Full title on large screens - allow natural expansion */}
      <span className="hidden lg:inline font-['Crimson_Text:SemiBold'] font-semibold text-[#160e0c] text-[15.75px] leading-normal whitespace-nowrap" title={source}>
        {source}
      </span>
      {/* Medium length title on medium screens (15 characters) */}
      <span className="hidden md:inline lg:hidden font-['Crimson_Text:SemiBold'] font-semibold text-[#160e0c] text-[15.75px] leading-normal" title={source}>
        {shortenWork(source, 15)}
      </span>
      {/* Short title on small screens (12 characters) */}
      <span className="inline md:hidden font-['Crimson_Text:SemiBold'] font-semibold text-[#160e0c] text-[15.75px] leading-normal" title={source}>
        {shortenWork(source, 12)}
      </span>
    </>
  );
};

// Responsive Region Display Component
const ResponsiveRegion = ({ region }: { region: string }) => {
  const shortenRegion = (region: string) => {
    const regionAbbreviations: { [key: string]: string } = {
      'North America': 'N. America',
      'South America': 'S. America',
      'Europe': 'Europe',
      'Asia': 'Asia',
      'Africa': 'Africa',
      'Oceania': 'Oceania'
    };
    return regionAbbreviations[region] || region;
  };

  return (
    <>
      {/* Full region name on large screens */}
      <span className="hidden lg:inline font-['Crimson_Text:SemiBold'] font-semibold text-[#160e0c] text-[15.75px] leading-normal">
        {region}
      </span>
      {/* Abbreviated region on medium and small screens */}
      <span className="inline lg:hidden font-['Crimson_Text:SemiBold'] font-semibold text-[#160e0c] text-[15.75px] leading-normal" title={region}>
        {shortenRegion(region)}
      </span>
    </>
  );
};

// ChevronDown component matching Figma design
const ChevronDown = () => (
  <div className="relative shrink-0 size-[18px]">
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 18 18"
    >
      <path
        d="M4.5 6.75L9 11.25L13.5 6.75"
        stroke="var(--stroke-0, #856658)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  </div>
);

interface AdminInterfaceProps {
  birds: BirdData[];
  onBirdsUpdate: (birds: BirdData[]) => void;
  onClose: () => void;
  onLogout: () => void;
}

const MOOD_OPTIONS = [
  { value: 'love', label: 'Love', color: '#E47DA8', bgColor: '#fee4e5', textColor: '#641f46' },
  { value: 'joy', label: 'Joy', color: '#DF8D3B', bgColor: '#ffe7ce', textColor: '#71320d' },
  { value: 'surprise', label: 'Surprise', color: '#A7B75F', bgColor: '#faeec6', textColor: '#664d01' },
  { value: 'calm', label: 'Calm', color: '#5ABDAC', bgColor: '#ddf1e4', textColor: '#164f4a' },
  { value: 'sadness', label: 'Sadness', color: '#66A0C8', bgColor: '#e1eceb', textColor: '#163b66' },
  { value: 'fear', label: 'Fear', color: '#A699D0', bgColor: '#f0eaec', textColor: '#3c2a62' },
  { value: 'anger', label: 'Anger', color: '#CB5656', bgColor: '#ffe1d5', textColor: '#6c201c' }
];

const REGION_OPTIONS = [
  'Europe',
  'Asia', 
  'North America',
  'South America',
  'Africa',
  'Oceania'
];

const SPECIES_OPTIONS = [
  'Raven', 'Crow', 'Lark', 'Nightingale', 'Owl', 'Eagle', 'Swan', 'Dove', 
  'Sparrow', 'Wren', 'Peacock', 'Hawk', 'Falcon', 'Goose', 'Rooster', 
  'Hoopoe', 'Parrot', 'Bulbul', 'Albatross', 'Robin', 'Kite', 'Swallow', 'Magpie'
];

// Table column definitions - expanded work and author columns for optimal desktop space usage
const TABLE_COLUMNS = [
  { key: 'id', label: 'ID', width: '60px', sortable: true },
  { key: 'species', label: 'Species', width: '120px', sortable: true },
  { key: 'author', label: 'Author', width: '200px', sortable: true }, // Significantly expanded for full author names
  { key: 'source', label: 'Source', width: '240px', sortable: true }, // Substantially expanded for work titles
  { key: 'year', label: 'Year', width: '50px', sortable: true }, // Minimized - only needs 4 digits
  { key: 'mood', label: 'Mood', width: '90px', sortable: true }, // Minimized while preserving badge styling
  { key: 'region', label: 'Region', width: '120px', sortable: true },
  { key: 'quote', label: 'Quote', width: '300px', sortable: false },
  { key: 'actions', label: 'Actions', width: '100px', sortable: false }
];

type ViewMode = 'cards' | 'table';
type SortField = keyof BirdData;
type SortDirection = 'asc' | 'desc';
type ActiveTab = 'manage' | 'import-export' | 'statistics' | 'settings';

interface DuplicateGroup {
  original: BirdData;
  duplicates: BirdData[];
  reason: string;
}

export function AdminInterface({ birds, onBirdsUpdate, onClose, onLogout }: AdminInterfaceProps) {
  const [localBirds, setLocalBirds] = useState<BirdData[]>(birds);
  const [editingBird, setEditingBird] = useState<BirdData | null>(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterMood, setFilterMood] = useState<string>('all');
  const [filterRegion, setFilterRegion] = useState<string>('all');
  const [filterAuthor, setFilterAuthor] = useState<string>('all');
  const [filterFamily, setFilterFamily] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<ActiveTab>('manage');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isColumnSelectorOpen, setIsColumnSelectorOpen] = useState(false);
  
  // New state for enhanced features
  const [viewMode, setViewMode] = useState<ViewMode>('cards');
  const [selectedBirds, setSelectedBirds] = useState<Set<number>>(new Set());
  const [sortField, setSortField] = useState<SortField>('id');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [visibleColumns, setVisibleColumns] = useState<Set<string>>(new Set(TABLE_COLUMNS.map(col => col.key)));
  const [isBulkEditOpen, setIsBulkEditOpen] = useState(false);
  const [isCSVImportOpen, setIsCSVImportOpen] = useState(false);
  const [isDuplicateReviewOpen, setIsDuplicateReviewOpen] = useState(false);
  const [duplicateGroups, setDuplicateGroups] = useState<DuplicateGroup[]>([]);
  const [csvData, setCsvData] = useState<BirdData[]>([]);

  // Settings state
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [isAddUserDialogOpen, setIsAddUserDialogOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
  const [passwordUserId, setPasswordUserId] = useState<string>('');

  // Form state for adding/editing birds
  const [formData, setFormData] = useState<Partial<BirdData>>({
    species: '',
    imageUrl: '',
    audioUrl: '',
    quote: '',
    author: '',
    source: '',
    year: new Date().getFullYear(),
    mood: 'calm',
    wingspan: 0,
    region: 'Europe'
  });

  // Bulk edit form data
  const [bulkFormData, setBulkFormData] = useState<Partial<BirdData>>({});

  // Custom species state
  const [isCustomSpecies, setIsCustomSpecies] = useState(false);
  const [customSpecies, setCustomSpecies] = useState('');

  // User form states
  const [userFormData, setUserFormData] = useState<CreateUserRequest>({
    username: '',
    email: '',
    recoveryEmail: '',
    password: '',
    role: 'editor'
  });

  const [passwordFormData, setPasswordFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [accountFormData, setAccountFormData] = useState({
    username: '',
    email: '',
    recoveryEmail: ''
  });

  useEffect(() => {
    setLocalBirds(birds);
  }, [birds]);

  // Detect mobile screens and handle responsive behavior
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Track unsaved changes
  useEffect(() => {
    const hasChanges = JSON.stringify(localBirds) !== JSON.stringify(birds);
    setHasUnsavedChanges(hasChanges);
  }, [localBirds, birds]);

  // Load current user and all users on component mount
  useEffect(() => {
    const user = UserManager.getCurrentUser();
    setCurrentUser(user);
    if (user) {
      setAccountFormData({
        username: user.username,
        email: user.email || '',
        recoveryEmail: user.recoveryEmail || ''
      });
    }
    loadAllUsers();
  }, []);

  const loadAllUsers = () => {
    const users = UserManager.getAllUsers();
    setAllUsers(users);
  };

  // Enhanced Bird Quote Card Component - Matching Figma Design
  function BirdQuoteCard({ bird, isSelected, onSelect, onEdit, onDelete }: {
    bird: BirdData;
    isSelected: boolean;
    onSelect: (id: number) => void;
    onEdit: (bird: BirdData) => void;
    onDelete: (id: number) => void;
  }) {
    const moodOption = MOOD_OPTIONS.find(m => m.value === bird.mood);
    
    const handleChipClick = (type: string, value: string) => {
      // Apply filter based on chip type
      switch (type) {
        case 'mood':
          setFilterMood(value);
          toast.success(`Filtered by mood: ${moodOption?.label || value}`);
          break;
        case 'region':
          setFilterRegion(value);
          toast.success(`Filtered by region: ${value}`);
          break;
        case 'author':
          setFilterAuthor(value);
          toast.success(`Filtered by author: ${value}`);
          break;
        case 'family':
          const familyValue = getBirdFamily(bird.species);
          setFilterFamily(familyValue);
          toast.success(`Filtered by family: ${getFamilyDisplayName(familyValue)}`);
          break;
      }
    };

    // Icon Components with exact colors from Figma
    const moodColors = {
      love: { bg: '#fee4e5', text: '#641f46', dot: '#E47DA8' },
      joy: { bg: '#ffe7ce', text: '#71320d', dot: '#DF8D3B' },
      surprise: { bg: '#faeec6', text: '#664d01', dot: '#A7B75F' },
      calm: { bg: '#ddf1e4', text: '#164f4a', dot: '#5ABDAC' },
      sadness: { bg: '#e1eceb', text: '#163b66', dot: '#66A0C8' },
      fear: { bg: '#f0eaec', text: '#3c2a62', dot: '#A699D0' },
      anger: { bg: '#ffe1d5', text: '#6c201c', dot: '#CB5656' }
    };

    const moodColorScheme = moodColors[bird.mood as keyof typeof moodColors] || moodColors.calm;

    const PenToolIcon = () => (
      <svg className="w-3.5 h-3.5" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_2169_804)">
          <path
            d={svgPaths.p37a62100}
            stroke="#CCAE9D"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.4"
          />
        </g>
        <defs>
          <clipPath id="clip0_2169_804">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    );

    const BookIcon = () => (
      <svg className="w-3.5 h-3.5" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g>
          <path
            d={svgPaths.p22acf700}
            stroke="#CCAE9D"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.4"
          />
        </g>
      </svg>
    );

    const FeatherIcon = () => (
      <svg className="w-3.5 h-3.5" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_2169_792)">
          <path
            d={svgPaths.p333ffb00}
            stroke="#CCAE9D"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.4"
          />
        </g>
        <defs>
          <clipPath id="clip0_2169_792">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    );

    const CompassIcon = () => (
      <svg className="w-3.5 h-3.5" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_2169_780)">
          <g>
            <path
              d={svgPaths.p253def00}
              stroke="#CCAE9D"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.4"
            />
            <path
              d={svgPaths.p247c4e80}
              stroke="#CCAE9D"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.4"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2169_780">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    );

    const MoodCircle = () => (
      <svg className="w-2.5 h-2.5" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_2169_783)">
          <path
            d={svgPaths.p26db7700}
            fill={moodColorScheme.dot}
            stroke={moodColorScheme.dot}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2169_783">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    );

    return (
      <div className={`bg-[#fffcfa] rounded-xl border border-[#f2dfd3] overflow-hidden bird-quote-card ${isSelected ? 'bird-quote-card-selected' : ''}`}>
        <div className="flex flex-col h-full">
          {/* Card Header */}
          <div className="pt-[21px] px-0 pb-3">
            <div className="font-['Crimson_Text:Bold'] font-bold text-[#856658] text-[17.75px] text-center uppercase">
              {bird.species.toLowerCase()}
            </div>
          </div>

          {/* Quote Content - Centered */}
          <div className="flex-1 flex items-center justify-center px-6 pb-6">
            <div className="text-center">
              <div className="font-['Cormorant:SemiBold_Italic'] font-semibold italic text-[#160e0c] text-[28px] leading-[1.17] text-center">
                {bird.quote}
              </div>
            </div>
          </div>

          {/* Chips Row */}
          <div className="px-6 pb-6">
            <div className="flex flex-wrap gap-2.5 justify-center">
              {/* Author Chip */}
              <button
                onClick={() => handleChipClick('author', bird.author)}
                className="bg-[#faeee6] flex items-center gap-1 px-[9.02px] py-[9.02px] rounded-[9.02px] hover:bg-[#f0e6dd] transition-colors"
              >
                <PenToolIcon />
                <span className="font-['Crimson_Text:SemiBold'] font-semibold text-[#160e0c] text-[14px] leading-none whitespace-nowrap">
                  {bird.author}
                </span>
              </button>

              {/* Work Chip */}
              <button
                onClick={() => handleChipClick('work', bird.source)}
                className="bg-[#faeee6] flex items-center gap-1 px-[9.02px] py-[9.02px] rounded-[9.02px] hover:bg-[#f0e6dd] transition-colors"
              >
                <BookIcon />
                <span className="font-['Crimson_Text:SemiBold'] font-semibold text-[#160e0c] text-[14px] leading-none whitespace-nowrap">
                  {bird.source}
                </span>
              </button>

              {/* Mood Chip */}
              <button
                onClick={() => handleChipClick('mood', bird.mood)}
                className="flex items-center gap-1 px-[9.02px] py-[9.02px] rounded-[9.02px] hover:opacity-80 transition-opacity"
                style={{
                  backgroundColor: moodColorScheme.bg,
                  color: moodColorScheme.text
                }}
              >
                <MoodCircle />
                <span className="font-['Crimson_Text:SemiBold'] font-semibold text-[14px] leading-none whitespace-nowrap">
                  {moodOption?.label || bird.mood}
                </span>
              </button>

              {/* Family Chip */}
              <button
                onClick={() => handleChipClick('family', getBirdFamily(bird.species))}
                className="bg-[#faeee6] flex items-center gap-1 px-[9.02px] py-[9.02px] rounded-[9.02px] hover:bg-[#f0e6dd] transition-colors"
              >
                <FeatherIcon />
                <span className="font-['Crimson_Text:SemiBold'] font-semibold text-[#160e0c] text-[14px] leading-none whitespace-nowrap">
                  {getFamilyDisplayName(getBirdFamily(bird.species))}
                </span>
              </button>

              {/* Region Chip */}
              <button
                onClick={() => handleChipClick('region', bird.region)}
                className="bg-[#faeee6] flex items-center gap-1 px-[9.02px] py-[9.02px] rounded-[9.02px] hover:bg-[#f0e6dd] transition-colors"
              >
                <CompassIcon />
                <span className="font-['Crimson_Text:SemiBold'] font-semibold text-[#160e0c] text-[14px] leading-none whitespace-nowrap">
                  {bird.region}
                </span>
              </button>
            </div>
          </div>

          {/* Action Bar */}
          <div className="border-t border-[#f2dfd3]">
            <div className="flex">
              {/* Checkbox */}
              <button
                onClick={() => onSelect(bird.id)}
                className="flex-1 flex items-center justify-center py-2.5 hover:bg-[#fff8f2] transition-colors"
              >
                <div className="w-6 h-6">
                  <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path
                      d={svgPaths.p11d16a80}
                      fill={isSelected ? "#66800b" : "#FFF8F2"}
                      stroke={isSelected ? "#66800b" : "#CCAE9D"}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                    />
                    {isSelected && (
                      <path
                        d="m9 12 2 2 4-4"
                        stroke="#FFF8F2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    )}
                  </svg>
                </div>
              </button>

              {/* Edit Button */}
              <button
                onClick={() => onEdit(bird)}
                className="flex-1 flex items-center justify-center py-2.5 border-l border-[#f2dfd3] hover:bg-[#fff8f2] transition-colors"
              >
                <div className="w-6 h-6">
                  <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path
                      d={svgPaths.p35fd4b00}
                      stroke="#CCAE9D"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>
              </button>

              {/* Delete Button */}
              <button
                onClick={() => onDelete(bird.id)}
                className="flex-1 flex items-center justify-center py-2.5 border-l border-[#f2dfd3] hover:bg-[#fff8f2] transition-colors"
              >
                <div className="w-6 h-6">
                  <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path
                      d={svgPaths.p1ea5da80}
                      stroke="#CCAE9D"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Get unique authors for filter dropdown
  const getUniqueAuthors = () => {
    const authors = Array.from(new Set(localBirds.map(bird => bird.author))).sort();
    return authors;
  };

  // Get unique families for filter dropdown
  const getUniqueFamilies = () => {
    const families = Array.from(new Set(localBirds.map(bird => getBirdFamily(bird.species)))).sort();
    return families.map(family => ({
      value: family,
      displayName: getFamilyDisplayName(family),
      latinName: getFamilyLatinName(family)
    }));
  };

  const handleSave = () => {
    onBirdsUpdate(localBirds);
    setHasUnsavedChanges(false);
    toast.success('Changes saved successfully!');
  };

  // Prompt for unsaved changes
  const promptSaveChanges = (): Promise<boolean> => {
    return new Promise((resolve) => {
      if (!hasUnsavedChanges) {
        resolve(true);
        return;
      }

      const shouldSave = window.confirm(
        'You have unsaved changes. Would you like to save them before leaving?'
      );

      if (shouldSave) {
        handleSave();
      }
      resolve(true);
    });
  };

  const handleLogout = async () => {
    const canProceed = await promptSaveChanges();
    if (canProceed) {
      UserManager.logout();
      toast.success('Logged out successfully');
      onLogout();
    }
  };

  const handleBackToGallery = async () => {
    const canProceed = await promptSaveChanges();
    if (canProceed) {
      onClose();
    }
  };

  // User management functions
  const handleCreateUser = () => {
    if (!userFormData.username || !userFormData.password) {
      toast.error('Username and password are required');
      return;
    }

    if (userFormData.password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    const result = UserManager.createUser(userFormData);
    if (result.success) {
      toast.success(`User ${userFormData.username} created successfully!`);
      setIsAddUserDialogOpen(false);
      setUserFormData({
        username: '',
        email: '',
        recoveryEmail: '',
        password: '',
        role: 'editor'
      });
      loadAllUsers();
    } else {
      toast.error(result.error || 'Failed to create user');
    }
  };

  const handleUpdateUser = (user: User) => {
    const result = UserManager.updateUser({
      id: user.id,
      username: user.username,
      email: user.email,
      recoveryEmail: user.recoveryEmail,
      role: user.role,
      isActive: user.isActive
    });

    if (result.success) {
      toast.success('User updated successfully!');
      loadAllUsers();
      if (user.id === currentUser?.id) {
        setCurrentUser(result.user!);
      }
    } else {
      toast.error(result.error || 'Failed to update user');
    }
  };

  const handleDeleteUser = (userId: string) => {
    const result = UserManager.deleteUser(userId);
    if (result.success) {
      toast.success('User deleted successfully!');
      loadAllUsers();
    } else {
      toast.error(result.error || 'Failed to delete user');
    }
  };

  const handleChangePassword = () => {
    if (!passwordFormData.newPassword || !passwordFormData.confirmPassword) {
      toast.error('Please fill in all password fields');
      return;
    }

    if (passwordFormData.newPassword !== passwordFormData.confirmPassword) {
      toast.error('New passwords do not match');
      return;
    }

    if (passwordFormData.newPassword.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    const isOwnPassword = passwordUserId === currentUser?.id;
    const result = UserManager.changePassword({
      userId: passwordUserId,
      currentPassword: isOwnPassword ? passwordFormData.currentPassword : undefined,
      newPassword: passwordFormData.newPassword
    });

    if (result.success) {
      toast.success('Password changed successfully!');
      setIsChangePasswordOpen(false);
      setPasswordFormData({ currentPassword: '', newPassword: '', confirmPassword: '' });
      setPasswordUserId('');
    } else {
      toast.error(result.error || 'Failed to change password');
    }
  };

  const handleUpdateAccount = () => {
    if (!currentUser) return;

    if (!accountFormData.username) {
      toast.error('Username is required');
      return;
    }

    const result = UserManager.updateUser({
      id: currentUser.id,
      username: accountFormData.username,
      email: accountFormData.email || undefined,
      recoveryEmail: accountFormData.recoveryEmail || undefined
    });

    if (result.success) {
      toast.success('Account updated successfully!');
      setCurrentUser(result.user!);
    } else {
      toast.error(result.error || 'Failed to update account');
    }
  };

  const validateForm = () => {
    const species = isCustomSpecies ? customSpecies : formData.species;
    
    if (!species || !formData.quote || !formData.author || !formData.source || !formData.imageUrl) {
      toast.error('Please fill in all required fields');
      return false;
    }

    // Validate SVG URL
    if (!formData.imageUrl.toLowerCase().endsWith('.svg')) {
      toast.error('Image URL must be an SVG file (.svg extension required)');
      return false;
    }

    // Validate SVG URL is a proper URL
    try {
      new URL(formData.imageUrl);
    } catch {
      toast.error('Please enter a valid SVG URL');
      return false;
    }

    return true;
  };

  const handleAddBird = () => {
    if (!validateForm()) return;

    const species = isCustomSpecies ? customSpecies : formData.species!;

    const newBird: BirdData = {
      id: Math.max(...localBirds.map(b => b.id), 0) + 1,
      species: species,
      imageUrl: formData.imageUrl!,
      audioUrl: formData.audioUrl || '',
      quote: formData.quote!,
      author: formData.author!,
      source: formData.source!,
      year: formData.year || new Date().getFullYear(),
      mood: formData.mood as BirdData['mood'] || 'calm',
      wingspan: formData.wingspan || 0,
      region: formData.region || 'Europe'
    };

    setLocalBirds([...localBirds, newBird]);
    resetForm();
    setIsAddDialogOpen(false);
    toast.success(`Added ${newBird.species} quote successfully!`);
  };

  const handleEditBird = (bird: BirdData) => {
    setFormData(bird);
    
    // Check if it's a custom species (not in predefined list)
    const isCustom = !SPECIES_OPTIONS.includes(bird.species);
    setIsCustomSpecies(isCustom);
    if (isCustom) {
      setCustomSpecies(bird.species);
    }
    
    setEditingBird(bird);
  };

  const handleUpdateBird = () => {
    if (!validateForm()) return;

    const species = isCustomSpecies ? customSpecies : formData.species!;

    const updatedBird: BirdData = {
      ...editingBird!,
      species: species,
      imageUrl: formData.imageUrl!,
      audioUrl: formData.audioUrl || '',
      quote: formData.quote!,
      author: formData.author!,
      source: formData.source!,
      year: formData.year || new Date().getFullYear(),
      mood: formData.mood as BirdData['mood'] || 'calm',
      wingspan: formData.wingspan || 0,
      region: formData.region || 'Europe'
    };

    setLocalBirds(localBirds.map(bird => bird.id === editingBird!.id ? updatedBird : bird));
    setEditingBird(null);
    resetForm();
    toast.success(`Updated ${updatedBird.species} quote successfully!`);
  };

  const handleDeleteBird = (birdId: number) => {
    setLocalBirds(localBirds.filter(bird => bird.id !== birdId));
    setSelectedBirds(prev => {
      const newSet = new Set(prev);
      newSet.delete(birdId);
      return newSet;
    });
    toast.success('Bird quote deleted successfully!');
  };

  const resetForm = () => {
    setFormData({
      species: '',
      imageUrl: '',
      audioUrl: '',
      quote: '',
      author: '',
      source: '',
      year: new Date().getFullYear(),
      mood: 'calm',
      wingspan: 0,
      region: 'Europe'
    });
    setIsCustomSpecies(false);
    setCustomSpecies('');
  };

  // Enhanced export functionality
  const handleExport = (selectedOnly: boolean = false) => {
    const dataToExport = selectedOnly && selectedBirds.size > 0
      ? localBirds.filter(bird => selectedBirds.has(bird.id))
      : localBirds;
    
    const dataStr = JSON.stringify(dataToExport, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const fileName = selectedOnly 
      ? `literary-aviary-selected-${selectedBirds.size}-birds.json`
      : 'literary-aviary-birds.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', fileName);
    linkElement.click();
    
    toast.success(`${selectedOnly ? 'Selected' : 'All'} data exported successfully!`);
  };

  // CSV export functionality
  const handleCSVExport = (selectedOnly: boolean = false) => {
    const dataToExport = selectedOnly && selectedBirds.size > 0
      ? localBirds.filter(bird => selectedBirds.has(bird.id))
      : localBirds;
    
    const headers = ['ID', 'Species', 'Author', 'Source', 'Year', 'Mood', 'Region', 'Quote', 'Image URL', 'Audio URL'];
    const csvContent = [
      headers.join(','),
      ...dataToExport.map(bird => [
        bird.id,
        `"${bird.species}"`,
        `"${bird.author}"`,
        `"${bird.source}"`,
        bird.year,
        bird.mood,
        `"${bird.region}"`,
        `"${bird.quote.replace(/"/g, '""')}"`,
        `"${bird.imageUrl}"`,
        `"${bird.audioUrl || ''}"`
      ].join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', selectedOnly 
      ? `literary-aviary-selected-${selectedBirds.size}-birds.csv`
      : 'literary-aviary-birds.csv');
    link.click();
    URL.revokeObjectURL(url);
    
    toast.success(`${selectedOnly ? 'Selected' : 'All'} data exported as CSV!`);
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedBirds = JSON.parse(e.target?.result as string);
        setLocalBirds(importedBirds);
        toast.success('Data imported successfully!');
      } catch (error) {
        toast.error('Error importing data. Please check the file format.');
      }
    };
    reader.readAsText(file);
  };

  // CSV Import functionality
  const handleCSVImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const csvText = e.target?.result as string;
        const lines = csvText.split('\n').filter(line => line.trim());
        const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
        
        const importedBirds: BirdData[] = [];
        const maxId = Math.max(...localBirds.map(b => b.id), 0);
        
        for (let i = 1; i < lines.length; i++) {
          const values = lines[i].split(',').map(v => v.trim().replace(/^"|"$/g, '').replace(/""/g, '"'));
          
          if (values.length >= 7) { // Minimum required fields
            const newBird: BirdData = {
              id: maxId + i,
              species: values[1] || 'Unknown',
              author: values[2] || 'Unknown',
              source: values[3] || 'Unknown',
              year: parseInt(values[4]) || new Date().getFullYear(),
              mood: (values[5] as BirdData['mood']) || 'calm',
              region: values[6] || 'Europe',
              quote: values[7] || '',
              imageUrl: values[8] || '',
              audioUrl: values[9] || '',
              wingspan: 0 // Not using this anymore, but keeping for compatibility
            };
            
            // Basic validation
            if (newBird.species && newBird.author && newBird.quote) {
              importedBirds.push(newBird);
            }
          }
        }
        
        if (importedBirds.length > 0) {
          setCsvData(importedBirds);
          detectDuplicates(importedBirds);
          setIsCSVImportOpen(true);
        } else {
          toast.error('No valid bird data found in CSV file');
        }
      } catch (error) {
        toast.error('Error parsing CSV file. Please check the format.');
      }
    };
    reader.readAsText(file);
  };

  // Duplicate detection
  const detectDuplicates = (newBirds: BirdData[]) => {
    const duplicates: DuplicateGroup[] = [];
    
    newBirds.forEach(newBird => {
      // Find potential duplicates in existing data
      const existingDuplicates = localBirds.filter(existing => {
        // Exact match
        if (existing.species === newBird.species && 
            existing.author === newBird.author && 
            existing.quote === newBird.quote) {
          return true;
        }
        
        // Similar quote match (80% similarity)
        if (existing.species === newBird.species && 
            existing.author === newBird.author) {
          const similarity = calculateSimilarity(existing.quote, newBird.quote);
          return similarity > 0.8;
        }
        
        return false;
      });
      
      if (existingDuplicates.length > 0) {
        duplicates.push({
          original: existingDuplicates[0],
          duplicates: [newBird],
          reason: existingDuplicates[0].quote === newBird.quote ? 'Exact match' : 'Similar quote'
        });
      }
    });
    
    setDuplicateGroups(duplicates);
  };

  // Calculate text similarity
  const calculateSimilarity = (str1: string, str2: string): number => {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;
    
    if (longer.length === 0) return 1.0;
    
    const distance = levenshteinDistance(longer, shorter);
    return (longer.length - distance) / longer.length;
  };

  // Levenshtein distance algorithm
  const levenshteinDistance = (str1: string, str2: string): number => {
    const matrix = [];
    
    for (let i = 0; i <= str2.length; i++) {
      matrix[i] = [i];
    }
    
    for (let j = 0; j <= str1.length; j++) {
      matrix[0][j] = j;
    }
    
    for (let i = 1; i <= str2.length; i++) {
      for (let j = 1; j <= str1.length; j++) {
        if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          );
        }
      }
    }
    
    return matrix[str2.length][str1.length];
  };

  // Handle CSV import with duplicate resolution
  const handleConfirmCSVImport = (skipDuplicates: boolean = false) => {
    let birdsToAdd = csvData;
    
    if (skipDuplicates && duplicateGroups.length > 0) {
      const duplicateNewBirds = new Set(duplicateGroups.flatMap(group => group.duplicates.map(d => d.id)));
      birdsToAdd = csvData.filter(bird => !duplicateNewBirds.has(bird.id));
    }
    
    const maxId = Math.max(...localBirds.map(b => b.id), 0);
    const finalBirds = birdsToAdd.map((bird, index) => ({
      ...bird,
      id: maxId + index + 1
    }));
    
    setLocalBirds([...localBirds, ...finalBirds]);
    setIsCSVImportOpen(false);
    setCsvData([]);
    setDuplicateGroups([]);
    toast.success(`Successfully imported ${finalBirds.length} birds!`);
  };

  const getDefaultImageUrl = (species: string): string => {
    const speciesMap: { [key: string]: string } = {
      'Raven': 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Raven.svg',
      'Crow': 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Crow.svg',
      'Lark': 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Lark.svg',
      'Nightingale': 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Nightingale.svg',
      'Owl': 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Owl.svg',
      'Eagle': 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Eagle.svg',
      'Swan': 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Swan.svg',
      'Dove': 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Dove.svg',
      'Sparrow': 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Sparrow.svg',
      'Wren': 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Wren.svg',
      'Peacock': 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Peacock.svg',
      'Hawk': 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Raptor.svg',
      'Falcon': 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Raptor.svg',
      'Goose': 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Goose.svg',
      'Rooster': 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Cock.svg',
      'Hoopoe': 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Hoopoe.svg',
      'Parrot': 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Parrot.svg',
      'Bulbul': 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Bulbul.svg',
      'Albatross': 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Albatross.svg',
      'Robin': 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Ruddock.svg',
      'Kite': 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Raptor.svg',
      'Swallow': 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Swallow.svg',
      'Magpie': 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Pie.svg'
    };
    return speciesMap[species] || '';
  };

  const handleSpeciesChange = (value: string) => {
    if (value === 'custom') {
      setIsCustomSpecies(true);
      setFormData({...formData, species: ''});
    } else {
      setIsCustomSpecies(false);
      setCustomSpecies('');
      setFormData({...formData, species: value});
      
      // Auto-fill image URL if it's empty and we have a default
      if (!formData.imageUrl) {
        const defaultUrl = getDefaultImageUrl(value);
        if (defaultUrl) {
          setFormData({...formData, species: value, imageUrl: defaultUrl});
        }
      }
    }
  };

  // Selection handlers
  const handleSelectAll = () => {
    if (selectedBirds.size === filteredBirds.length) {
      setSelectedBirds(new Set());
    } else {
      setSelectedBirds(new Set(filteredBirds.map(bird => bird.id)));
    }
  };

  const handleSelectBird = (birdId: number) => {
    setSelectedBirds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(birdId)) {
        newSet.delete(birdId);
      } else {
        newSet.add(birdId);
      }
      return newSet;
    });
  };

  // Bulk operations
  const handleBulkDelete = () => {
    if (selectedBirds.size === 0) return;
    
    setLocalBirds(localBirds.filter(bird => !selectedBirds.has(bird.id)));
    setSelectedBirds(new Set());
    toast.success(`Deleted ${selectedBirds.size} birds successfully!`);
  };

  const handleBulkEdit = () => {
    if (selectedBirds.size === 0) return;
    
    const updates: Partial<BirdData> = {};
    Object.entries(bulkFormData).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        updates[key as keyof BirdData] = value;
      }
    });
    
    if (Object.keys(updates).length === 0) {
      toast.error('No changes to apply');
      return;
    }
    
    setLocalBirds(localBirds.map(bird => 
      selectedBirds.has(bird.id) ? { ...bird, ...updates } : bird
    ));
    
    setSelectedBirds(new Set());
    setBulkFormData({});
    setIsBulkEditOpen(false);
    toast.success(`Updated ${selectedBirds.size} birds successfully!`);
  };

  // Sorting
  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  // Column visibility toggle - FIXED
  const toggleColumnVisibility = (columnKey: string) => {
    setVisibleColumns(prev => {
      const newSet = new Set(prev);
      if (newSet.has(columnKey)) {
        newSet.delete(columnKey);
      } else {
        newSet.add(columnKey);
      }
      return newSet;
    });
  };

  const showAllColumns = () => {
    setVisibleColumns(new Set(TABLE_COLUMNS.map(col => col.key)));
  };

  const hideAllColumns = () => {
    // Keep at least ID and actions visible
    setVisibleColumns(new Set(['id', 'actions']));
  };

  // Memoized filtered and sorted birds
  const filteredBirds = useMemo(() => {
    let filtered = localBirds.filter(bird => {
      const matchesSearch = bird.species.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           bird.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           bird.source.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           bird.quote.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesMood = filterMood === 'all' || bird.mood === filterMood;
      const matchesRegion = filterRegion === 'all' || bird.region === filterRegion;
      const matchesAuthor = filterAuthor === 'all' || bird.author === filterAuthor;
      const matchesFamily = filterFamily === 'all' || getBirdFamily(bird.species) === filterFamily;
      
      return matchesSearch && matchesMood && matchesRegion && matchesAuthor && matchesFamily;
    });

    // Sort
    filtered.sort((a, b) => {
      let aVal = a[sortField];
      let bVal = b[sortField];
      
      if (typeof aVal === 'string') {
        aVal = aVal.toLowerCase();
        bVal = (bVal as string).toLowerCase();
      }
      
      if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    return filtered;
  }, [localBirds, searchTerm, filterMood, filterRegion, filterAuthor, filterFamily, sortField, sortDirection]);

  // Statistics calculations
  const getTopSpecies = (n: number = 5) => {
    const speciesCounts: { [species: string]: number } = {};
    localBirds.forEach(bird => {
      speciesCounts[bird.species] = (speciesCounts[bird.species] || 0) + 1;
    });
    
    return Object.entries(speciesCounts)
      .map(([species, count]) => ({ species, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, n);
  };

  const getTopAuthors = (n: number = 5) => {
    const authorCounts: { [author: string]: number } = {};
    localBirds.forEach(bird => {
      authorCounts[bird.author] = (authorCounts[bird.author] || 0) + 1;
    });
    
    return Object.entries(authorCounts)
      .map(([author, count]) => ({ author, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, n);
  };



  const getTimelineData = () => {
    const yearCounts: { [year: number]: number } = {};
    localBirds.forEach(bird => {
      const year = Math.floor(bird.year / 50) * 50;
      yearCounts[year] = (yearCounts[year] || 0) + 1;
    });
    
    return Object.entries(yearCounts)
      .map(([year, count]) => ({ 
        period: `${year}s`,
        year: parseInt(year),
        count 
      }))
      .sort((a, b) => a.year - b.year);
  };

  const getRegionData = () => {
    return REGION_OPTIONS.map(region => ({
      region,
      count: localBirds.filter(bird => bird.region === region).length
    })).filter(item => item.count > 0); // Only show regions with data
  };

  const getRegionPieData = () => {
    // Colors from Figma design
    const regionColors = {
      'Europe': '#856658',
      'Asia': '#CCAE9D', 
      'North America': '#D0A215',
      'South America': '#ECCB60',
      'Africa': '#A0AF54',
      'Oceania': '#DDE2B2'
    };

    const regionCounts = REGION_OPTIONS.map(region => ({
      region,
      count: localBirds.filter(bird => bird.region === region).length,
      color: regionColors[region as keyof typeof regionColors]
    })).filter(item => item.count > 0);

    const totalBirds = regionCounts.reduce((sum, item) => sum + item.count, 0);
    
    return regionCounts.map(item => ({
      ...item,
      percentage: Math.round((item.count / totalBirds) * 100)
    }));
  };

  const BirdForm = ({ isEditing = false }: { isEditing?: boolean }) => (
    <div className="space-y-4 max-h-[60vh] overflow-y-auto">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="species">Species *</Label>
          {!isCustomSpecies ? (
            <Select value={formData.species} onValueChange={handleSpeciesChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select species" />
              </SelectTrigger>
              <SelectContent>
                {SPECIES_OPTIONS.map(species => (
                  <SelectItem key={species} value={species}>{species}</SelectItem>
                ))}
                <SelectItem value="custom">
                  <div className="flex items-center gap-2">
                    <Plus className="w-3 h-3" />
                    Add custom species...
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          ) : (
            <div className="space-y-2">
              <Input
                placeholder="Enter custom species name"
                value={customSpecies}
                onChange={(e) => setCustomSpecies(e.target.value)}
                className="w-full"
              />
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setIsCustomSpecies(false);
                  setCustomSpecies('');
                }}
              >
                ← Back to species list
              </Button>
            </div>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="mood">Mood *</Label>
          <Select value={formData.mood} onValueChange={(value) => setFormData({...formData, mood: value as BirdData['mood']})}>
            <SelectTrigger>
              <SelectValue placeholder="Select mood" />
            </SelectTrigger>
            <SelectContent>
              {MOOD_OPTIONS.map(mood => (
                <SelectItem key={mood.value} value={mood.value}>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{backgroundColor: mood.color}} />
                    {mood.label}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="quote">Quote *</Label>
        <Textarea
          id="quote"
          placeholder="Enter the literary quote..."
          value={formData.quote}
          onChange={(e) => setFormData({...formData, quote: e.target.value})}
          rows={3}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="author">Author *</Label>
          <Input
            id="author"
            placeholder="e.g., William Shakespeare"
            value={formData.author}
            onChange={(e) => setFormData({...formData, author: e.target.value})}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="source">Source *</Label>
          <Input
            id="source"
            placeholder="e.g., Hamlet"
            value={formData.source}
            onChange={(e) => setFormData({...formData, source: e.target.value})}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="year">Year</Label>
          <Input
            id="year"
            type="number"
            placeholder="1600"
            value={formData.year}
            onChange={(e) => setFormData({...formData, year: parseInt(e.target.value) || new Date().getFullYear()})}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="region">Region</Label>
          <Select value={formData.region} onValueChange={(value) => setFormData({...formData, region: value})}>
            <SelectTrigger>
              <SelectValue placeholder="Select region" />
            </SelectTrigger>
            <SelectContent>
              {REGION_OPTIONS.map(region => (
                <SelectItem key={region} value={region}>{region}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="imageUrl">SVG Image URL *</Label>
        <Input
          id="imageUrl"
          placeholder="https://example.com/bird.svg"
          value={formData.imageUrl}
          onChange={(e) => setFormData({...formData, imageUrl: e.target.value})}
        />
        <p className="text-sm text-muted-foreground">
          Must be a valid SVG file URL for mood-based coloring to work properly.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="audioUrl">Audio URL (optional)</Label>
        <Input
          id="audioUrl"
          placeholder="URL to bird call audio file"
          value={formData.audioUrl}
          onChange={(e) => setFormData({...formData, audioUrl: e.target.value})}
        />
      </div>

      <div className="flex justify-end gap-2 pt-4">
        <Button variant="outline" onClick={() => {
          setEditingBird(null);
          setIsAddDialogOpen(false);
          resetForm();
        }}>
          Cancel
        </Button>
        <Button onClick={isEditing ? handleUpdateBird : handleAddBird}>
          {isEditing ? 'Update Bird' : 'Add Bird'}
        </Button>
      </div>
    </div>
  );

  // Bulk Edit Form - Fixed Select values
  const BulkEditForm = () => (
    <div className="space-y-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <div className="flex items-center gap-2 mb-2">
          <Users className="w-4 h-4 text-blue-600" />
          <span className="font-medium text-blue-900">Bulk Edit - {selectedBirds.size} birds selected</span>
        </div>
        <p className="text-sm text-blue-700">Only fill in the fields you want to update. Empty fields will remain unchanged.</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Species</Label>
          <Select value={bulkFormData.species || 'no-change'} onValueChange={(value) => setBulkFormData({...bulkFormData, species: value === 'no-change' ? undefined : value})}>
            <SelectTrigger>
              <SelectValue placeholder="Keep current values" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="no-change">Keep current values</SelectItem>
              {SPECIES_OPTIONS.map(species => (
                <SelectItem key={species} value={species}>{species}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label>Mood</Label>
          <Select value={bulkFormData.mood || 'no-change'} onValueChange={(value) => setBulkFormData({...bulkFormData, mood: value === 'no-change' ? undefined : value as BirdData['mood']})}>
            <SelectTrigger>
              <SelectValue placeholder="Keep current values" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="no-change">Keep current values</SelectItem>
              {MOOD_OPTIONS.map(mood => (
                <SelectItem key={mood.value} value={mood.value}>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{backgroundColor: mood.color}} />
                    {mood.label}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label>Region</Label>
        <Select value={bulkFormData.region || 'no-change'} onValueChange={(value) => setBulkFormData({...bulkFormData, region: value === 'no-change' ? undefined : value})}>
          <SelectTrigger>
            <SelectValue placeholder="Keep current values" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="no-change">Keep current values</SelectItem>
            {REGION_OPTIONS.map(region => (
              <SelectItem key={region} value={region}>{region}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Year</Label>
        <Input
          type="number"
          placeholder="Keep current values"
          value={bulkFormData.year || ''}
          onChange={(e) => setBulkFormData({...bulkFormData, year: parseInt(e.target.value) || undefined})}
        />
      </div>

      <div className="flex justify-end gap-2 pt-4">
        <Button variant="outline" onClick={() => {
          setIsBulkEditOpen(false);
          setBulkFormData({});
        }}>
          Cancel
        </Button>
        <Button onClick={handleBulkEdit}>
          Update {selectedBirds.size} Birds
        </Button>
      </div>
    </div>
  );

  // Table View Component
  const TableView = () => (
    <div className="space-y-4">
      {/* Table Header with Selection and Column Controls */}
      {selectedBirds.size > 0 && (
        <div className="flex items-center justify-between p-4 bg-[rgba(219,205,200,1)] rounded-lg">
          <div className="flex items-center gap-4">
            <Checkbox
              checked={selectedBirds.size === filteredBirds.length && filteredBirds.length > 0}
              onCheckedChange={handleSelectAll}
            />
            <span className="text-sm font-medium text-[13px] font-[Crimson_Text]">
              {selectedBirds.size} selected
            </span>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="bg-white rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#faeee6]">
                <th className="w-[44px] p-3">
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-[1.67px] border-[#856658] rounded-[2px] flex items-center justify-center">
                      {selectedBirds.size === filteredBirds.length && filteredBirds.length > 0 && (
                        <div className="w-2 h-2 bg-[#856658] rounded-[1px]" />
                      )}
                    </div>
                  </div>
                </th>
                {visibleColumns.has('species') && (
                  <th className="bg-[#faeee6] relative w-[100px] md:w-[120px] lg:w-[140px]">
                    <div className="flex items-center p-3 gap-2.5 cursor-pointer" onClick={() => handleSort('species')}>
                      <Feather className="w-5 h-5 stroke-[#856658] stroke-[1.67]" />
                      <span className="font-['Crimson_Text:SemiBold'] font-semibold text-[#160e0c] text-[15.75px] leading-normal">
                        Species
                      </span>
                      <ArrowUpDown className="w-5 h-5 stroke-[#856658] stroke-[1.67]" />
                    </div>
                    <div className="absolute right-0 top-0 bottom-0 w-[1.2px] bg-[#e5d1c5]" />
                  </th>
                )}
                {visibleColumns.has('source') && (
                  <th className="bg-[#faeee6] relative w-[100px] md:w-[120px] lg:w-[140px]">
                    <div className="flex items-center p-3 gap-2.5 cursor-pointer" onClick={() => handleSort('source')}>
                      <Book className="w-5 h-5 stroke-[#856658] stroke-[1.67]" />
                      <span className="font-['Crimson_Text:SemiBold'] font-semibold text-[#160e0c] text-[15.75px] leading-normal">
                        Work
                      </span>
                      <ArrowUpDown className="w-5 h-5 stroke-[#856658] stroke-[1.67]" />
                    </div>
                    <div className="absolute right-0 top-0 bottom-0 w-[1.2px] bg-[#e5d1c5]" />
                  </th>
                )}
                {visibleColumns.has('author') && (
                  <th className="bg-[#faeee6] relative w-[120px] md:w-[140px] lg:w-[160px]">
                    <div className="flex items-center p-3 gap-2.5 cursor-pointer" onClick={() => handleSort('author')}>
                      <PenTool className="w-5 h-5 stroke-[#856658] stroke-[1.67]" />
                      <span className="font-['Crimson_Text:SemiBold'] font-semibold text-[#160e0c] text-[15.75px] leading-normal">
                        Author
                      </span>
                      <ArrowUpDown className="w-5 h-5 stroke-[#856658] stroke-[1.67]" />
                    </div>
                    <div className="absolute right-0 top-0 bottom-0 w-[1.2px] bg-[#e5d1c5]" />
                  </th>
                )}
                {visibleColumns.has('year') && (
                  <th className="bg-[#faeee6] relative">
                    <div className="flex items-center p-3 gap-2.5 cursor-pointer" onClick={() => handleSort('year')}>
                      <Clock className="w-5 h-5 stroke-[#856658] stroke-[1.67]" />
                      <span className="font-['Crimson_Text:SemiBold'] font-semibold text-[#160e0c] text-[15.75px] leading-normal">
                        Year
                      </span>
                      <ArrowUpDown className="w-5 h-5 stroke-[#856658] stroke-[1.67]" />
                    </div>
                    <div className="absolute right-0 top-0 bottom-0 w-[1.2px] bg-[#e5d1c5]" />
                  </th>
                )}
                {visibleColumns.has('mood') && (
                  <th className="bg-[#faeee6] relative">
                    <div className="flex items-center p-3 gap-2.5 cursor-pointer" onClick={() => handleSort('mood')}>
                      <Heart className="w-5 h-5 stroke-[#856658] stroke-[1.67]" />
                      <span className="font-['Crimson_Text:SemiBold'] font-semibold text-[#160e0c] text-[15.75px] leading-normal">
                        Emotion
                      </span>
                      <ArrowUpDown className="w-5 h-5 stroke-[#856658] stroke-[1.67]" />
                    </div>
                    <div className="absolute right-0 top-0 bottom-0 w-[1.2px] bg-[#e5d1c5]" />
                  </th>
                )}
                {visibleColumns.has('region') && (
                  <th className="bg-[#faeee6] relative w-[90px] md:w-[110px] lg:w-[130px]">
                    <div className="flex items-center p-3 gap-2.5 cursor-pointer" onClick={() => handleSort('region')}>
                      <Compass className="w-5 h-5 stroke-[#856658] stroke-[1.67]" />
                      <span className="font-['Crimson_Text:SemiBold'] font-semibold text-[#160e0c] text-[15.75px] leading-normal">
                        Region
                      </span>
                      <ArrowUpDown className="w-5 h-5 stroke-[#856658] stroke-[1.67]" />
                    </div>
                    <div className="absolute right-0 top-0 bottom-0 w-[1.2px] bg-[#e5d1c5]" />
                  </th>
                )}
                {visibleColumns.has('quote') && (
                  <th className="bg-[#faeee6] relative w-[458px]">
                    <div className="flex items-center p-3 gap-2.5 cursor-pointer" onClick={() => handleSort('quote')}>
                      <Bookmark className="w-5 h-5 stroke-[#856658] stroke-[1.67]" />
                      <span className="font-['Crimson_Text:SemiBold'] font-semibold text-[#160e0c] text-[15.75px] leading-normal">
                        Quote
                      </span>
                      <ArrowUpDown className="w-5 h-5 stroke-[#856658] stroke-[1.67]" />
                    </div>
                    <div className="absolute right-0 top-0 bottom-0 w-[1.2px] bg-[#e5d1c5]" />
                  </th>
                )}
                {visibleColumns.has('actions') && (
                  <th className="bg-[#faeee6] w-[88px]">
                    <div className="flex items-center p-3">
                      <span className="font-['Crimson_Text:SemiBold'] font-semibold text-[#160e0c] text-[15.75px] leading-normal">
                        Actions
                      </span>
                    </div>
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="bg-white">
              {filteredBirds.map((bird) => (
                <tr key={bird.id} className="relative border-b border-[#f2dfd3]">
                  <td className="w-[44px] p-3">
                    <div className="flex items-center justify-center">
                      <div 
                        className="w-5 h-5 border-[1.67px] border-[#856658] rounded-[2px] flex items-center justify-center cursor-pointer"
                        onClick={() => handleSelectBird(bird.id)}
                      >
                        {selectedBirds.has(bird.id) && (
                          <div className="w-2 h-2 bg-[#856658] rounded-[1px]" />
                        )}
                      </div>
                    </div>
                  </td>
                  {visibleColumns.has('species') && (
                    <td className="px-3 py-1.5" style={{ width: TABLE_COLUMNS.find(col => col.key === 'species')?.width }}>
                      <span className="font-['Crimson_Text:SemiBold'] font-semibold text-[#160e0c] text-[15.75px] leading-normal">
                        {bird.species}
                      </span>
                    </td>
                  )}
                  {visibleColumns.has('source') && (
                    <td className="px-3 py-1.5" style={{ width: TABLE_COLUMNS.find(col => col.key === 'source')?.width }}>
                      <ResponsiveWork source={bird.source} />
                    </td>
                  )}
                  {visibleColumns.has('author') && (
                    <td className="px-3 py-1.5" style={{ width: TABLE_COLUMNS.find(col => col.key === 'author')?.width }}>
                      <ResponsiveAuthor author={bird.author} />
                    </td>
                  )}
                  {visibleColumns.has('year') && (
                    <td className="px-3 py-1.5" style={{ width: TABLE_COLUMNS.find(col => col.key === 'year')?.width }}>
                      <span className="font-['Crimson_Text:SemiBold'] font-semibold text-[#160e0c] text-[15.75px] leading-normal">
                        {bird.year}
                      </span>
                    </td>
                  )}
                  {visibleColumns.has('mood') && (
                    <td className="px-3 py-1.5" style={{ width: TABLE_COLUMNS.find(col => col.key === 'mood')?.width }}>
                      <div className="flex items-center">
                        {bird.mood === 'calm' && (
                          <div className="bg-[#edeecf] px-3 py-0.5 rounded-md">
                            <span className="font-['Crimson_Text:SemiBold'] font-semibold text-[#3d4c07] text-[14px] uppercase leading-normal">
                              CALM
                            </span>
                          </div>
                        )}
                        {bird.mood === 'love' && (
                          <div className="bg-[#fee4e5] px-3 py-0.5 rounded-md">
                            <span className="font-['Crimson_Text:SemiBold'] font-semibold text-[#87285e] text-[14px] uppercase leading-normal">
                              LOVE
                            </span>
                          </div>
                        )}
                        {bird.mood === 'fear' && (
                          <div className="bg-[#f0eaec] px-3 py-0.5 rounded-md">
                            <span className="font-['Crimson_Text:SemiBold'] font-semibold text-[#3c2a62] text-[14px] uppercase leading-normal">
                              FEAR
                            </span>
                          </div>
                        )}
                        {bird.mood === 'joy' && (
                          <div className="bg-[#ffe7ce] px-3 py-0.5 rounded-md">
                            <span className="font-['Crimson_Text:SemiBold'] font-semibold text-[#71320d] text-[14px] uppercase leading-normal">
                              JOY
                            </span>
                          </div>
                        )}
                        {bird.mood === 'surprise' && (
                          <div className="bg-[#faeec6] px-3 py-0.5 rounded-md">
                            <span className="font-['Crimson_Text:SemiBold'] font-semibold text-[#664d01] text-[14px] uppercase leading-normal">
                              SURPRISE
                            </span>
                          </div>
                        )}
                        {bird.mood === 'sadness' && (
                          <div className="bg-[#e1eceb] px-3 py-0.5 rounded-md">
                            <span className="font-['Crimson_Text:SemiBold'] font-semibold text-[#1a4f8c] text-[14px] uppercase leading-normal">
                              SADNESS
                            </span>
                          </div>
                        )}
                        {bird.mood === 'anger' && (
                          <div className="bg-[#ffe1d5] px-3 py-0.5 rounded-md">
                            <span className="font-['Crimson_Text:SemiBold'] font-semibold text-[#6c201c] text-[14px] uppercase leading-normal">
                              ANGER
                            </span>
                          </div>
                        )}
                      </div>
                    </td>
                  )}
                  {visibleColumns.has('region') && (
                    <td className="px-3 py-1.5" style={{ width: TABLE_COLUMNS.find(col => col.key === 'region')?.width }}>
                      <ResponsiveRegion region={bird.region} />
                    </td>
                  )}
                  {visibleColumns.has('quote') && (
                    <td className="px-3 py-1.5 max-w-xs" style={{ width: TABLE_COLUMNS.find(col => col.key === 'quote')?.width }}>
                      <div className="font-['Crimson_Text:SemiBold'] font-semibold text-[#160e0c] text-[15.75px] leading-normal truncate">
                        {bird.quote}
                      </div>
                    </td>
                  )}
                  {visibleColumns.has('actions') && (
                    <td className="px-1.5 py-1" style={{ width: TABLE_COLUMNS.find(col => col.key === 'actions')?.width }}>
                      <div className="flex items-center gap-1.5">
                        <button
                          className="flex items-center justify-center px-2 py-0 h-full rounded-lg border-[0px] border-[#faeee6]"
                          onClick={() => handleEditBird(bird)}
                        >
                          <Edit2 className="w-5 h-5 stroke-[#856658] stroke-2" />
                        </button>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <button className="flex items-center justify-center px-2 py-0 h-full rounded-lg border-[0px] border-[#faeee6]">
                              <Trash2 className="w-5 h-5 stroke-[#CCAE9D] stroke-2" />
                            </button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Delete Bird Quote</AlertDialogTitle>
                              <AlertDialogDescription>
                                Are you sure you want to delete this {bird.species} quote? This action cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction onClick={() => handleDeleteBird(bird.id)}>
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredBirds.length === 0 && (
        <Card className="p-12 text-center">
          <p className="literary-description text-lg">No birds found matching your criteria.</p>
        </Card>
      )}
    </div>
  );

  // Beautiful world map using the new RegionsMap component with brown shading
  const LiteraryWorldMap = ({ regionData }: { regionData: any[] }) => {
    // Create region opacity mapping - handle Oceania mapping to Australia
    const regionOpacities: { [key: string]: number } = {};
    regionData.forEach(region => {
      const mapRegion = region.region === 'Oceania' ? 'Australia' : region.region;
      regionOpacities[mapRegion] = region.opacity;
    });

    // Improved color logic with better contrast
    const getRegionColor = (region: string) => {
      const regionInfo = regionData.find(r => (r.region === 'Oceania' ? 'Australia' : r.region) === region);
      const count = regionInfo?.count || 0;
      
      if (count === 0) {
        return 'rgba(239, 225, 223, 0.3)'; // Very light brown for 0 count
      } else {
        // Use stronger browns for regions with data
        const baseOpacity = Math.max(count / Math.max(...regionData.map(r => r.count)), 0.4);
        return `rgba(169, 143, 137, ${baseOpacity})`;
      }
    };

    // Region badge component with percentage-based positioning
    const RegionBadge = ({ region, position }: { region: string, position: { left: string, top: string } }) => {
      const regionInfo = regionData.find(r => r.region === region);
      const count = regionInfo?.count || 0;
      
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div 
                className="absolute bg-[#fff8f7] h-[31px] rounded-[35px] w-[30px] transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: position.left, top: position.top }}
              >
                <div className="absolute border-[5px] border-[rgba(255,243,238,0.59)] border-solid inset-[-5px] pointer-events-none rounded-[40px]" />
                <div className="flex flex-row items-center justify-center relative size-full">
                  <div className="box-border content-stretch flex flex-row gap-2.5 h-[31px] items-center justify-center p-[16px] relative w-[30px]">
                    <div className="css-isewdl flex flex-col font-['Cormorant:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5a3636] text-[16px] text-center text-nowrap tracking-[0.32px] uppercase">
                      <p className="adjustLetterSpacing block leading-[0.85] whitespace-pre">
                        {count}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent 
              side="top" 
              className="max-w-xs bg-[#fffcfa] border border-[#f2eae4] rounded-lg shadow-lg"
              style={{ 
                fontFamily: 'Crimson Pro, serif',
                color: '#341818'
              }}
            >
              <div className="space-y-1 p-2">
                <div className="font-medium literary-title">{region}</div>
                <div className="text-xs literary-description">
                  {count} literary bird reference{count !== 1 ? 's' : ''}
                </div>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    };

    // Percentage-based positioning that scales with the map
    const regionPositions = {
      'North America': { left: '18%', top: '35%' },
      'Europe': { left: '50%', top: '25%' },
      'Asia': { left: '75%', top: '35%' },
      'Africa': { left: '52%', top: '60%' },
      'Oceania': { left: '85%', top: '75%' },
      'South America': { left: '25%', top: '70%' }
    };

    return (
      <div className="w-full max-w-[600px] mx-auto">
        <div className="w-full relative" style={{ aspectRatio: '2/1.2' }}>
          {/* Apply CSS variables for each continent's brown coloring */}
          <style>
            {`
              .regions-map-container {
                --fill-0: ${getRegionColor('North America')};
              }
              .regions-map-container #Australia {
                fill: ${getRegionColor('Australia')} !important;
              }
              .regions-map-container #Europe {
                fill: ${getRegionColor('Europe')} !important;
              }
              .regions-map-container #Asia path {
                fill: ${getRegionColor('Asia')} !important;
              }
              .regions-map-container #Africa path {
                fill: ${getRegionColor('Africa')} !important;
              }
              .regions-map-container path[id="South America"] {
                fill: ${getRegionColor('South America')} !important;
              }
              .regions-map-container path[id="North America"] {
                fill: ${getRegionColor('North America')} !important;
              }
            `}
          </style>
          
          {/* Beautiful accurate world map */}
          <div className="regions-map-container w-full h-full">
            <RegionsMap />
          </div>
          
          {/* Region badges positioned using percentage-based coordinates */}
          {Object.entries(regionPositions).map(([region, position]) => (
            <RegionBadge 
              key={region}
              region={region}
              position={position}
            />
          ))}
        </div>
      </div>
    );
  };

  // Statistics card colors from Figma design
  const getBarColors = () => [
    '#9b7b77', // Darkest brown
    '#cca493', // Medium brown
    '#e7baa7', // Light brown
    '#e1c8bb', // Lighter brown
    '#ecd6cd'  // Lightest brown
  ];

  // User Form Component
  const UserForm = ({ isEditing = false }: { isEditing?: boolean }) => (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="username">Username *</Label>
          <Input
            id="username"
            placeholder="Enter username"
            value={isEditing ? editingUser?.username || '' : userFormData.username}
            onChange={(e) => {
              if (isEditing && editingUser) {
                setEditingUser({...editingUser, username: e.target.value});
              } else {
                setUserFormData({...userFormData, username: e.target.value});
              }
            }}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="role">Role *</Label>
          <Select 
            value={isEditing ? editingUser?.role || 'editor' : userFormData.role} 
            onValueChange={(value: 'admin' | 'editor' | 'viewer') => {
              if (isEditing && editingUser) {
                setEditingUser({...editingUser, role: value});
              } else {
                setUserFormData({...userFormData, role: value});
              }
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="admin">
                <div className="flex items-center gap-2">
                  <Shield className="w-3 h-3" />
                  Admin - Full access
                </div>
              </SelectItem>
              <SelectItem value="editor">
                <div className="flex items-center gap-2">
                  <Edit2 className="w-3 h-3" />
                  Editor - Manage birds
                </div>
              </SelectItem>
              <SelectItem value="viewer">
                <div className="flex items-center gap-2">
                  <Eye className="w-3 h-3" />
                  Viewer - Read only
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="user@example.com"
            value={isEditing ? editingUser?.email || '' : userFormData.email}
            onChange={(e) => {
              if (isEditing && editingUser) {
                setEditingUser({...editingUser, email: e.target.value});
              } else {
                setUserFormData({...userFormData, email: e.target.value});
              }
            }}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="recoveryEmail">Recovery Email</Label>
          <Input
            id="recoveryEmail"
            type="email"
            placeholder="recovery@example.com"
            value={isEditing ? editingUser?.recoveryEmail || '' : userFormData.recoveryEmail}
            onChange={(e) => {
              if (isEditing && editingUser) {
                setEditingUser({...editingUser, recoveryEmail: e.target.value});
              } else {
                setUserFormData({...userFormData, recoveryEmail: e.target.value});
              }
            }}
          />
        </div>
      </div>

      {!isEditing && (
        <div className="space-y-2">
          <Label htmlFor="password">Password *</Label>
          <Input
            id="password"
            type="password"
            placeholder="Minimum 6 characters"
            value={userFormData.password}
            onChange={(e) => setUserFormData({...userFormData, password: e.target.value})}
          />
        </div>
      )}

      <div className="flex justify-end gap-2 pt-4">
        <Button variant="outline" onClick={() => {
          setIsAddUserDialogOpen(false);
          setEditingUser(null);
          setUserFormData({
            username: '',
            email: '',
            recoveryEmail: '',
            password: '',
            role: 'editor'
          });
        }}>
          Cancel
        </Button>
        <Button onClick={isEditing ? () => editingUser && handleUpdateUser(editingUser) : handleCreateUser}>
          {isEditing ? 'Update User' : 'Create User'}
        </Button>
      </div>
    </div>
  );

  // Desktop Sidebar Navigation Component
  const SidebarNavigation = () => (
    <div className={`
      bg-[#160e0c] h-full flex flex-col transition-all duration-300 ease-in-out
      ${sidebarCollapsed ? 'w-16' : 'w-[244px]'}
    `}>
      <div className="flex-1 overflow-clip">
        <div className="flex flex-col gap-[15.75px] h-full px-2.5 py-[17px]">
          {/* Title and Collapse Toggle */}
          <div className="relative shrink-0 w-full">
            <div className="relative size-full">
              <div className={`box-border content-stretch flex flex-row items-start justify-between ${sidebarCollapsed ? 'justify-center px-4' : 'pl-4 pr-0'} py-0 relative w-full`}>
                {!sidebarCollapsed && (
                  <div className="basis-0 font-['Cormorant:Bold_Italic',_sans-serif] font-bold grow italic leading-[0] min-h-px min-w-px relative shrink-0 text-[#faeee6] text-[22.5px] text-left">
                    <p className="block leading-[1.426]">Literary Aviary</p>
                  </div>
                )}
                <button
                  onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                  className="relative shrink-0 size-[18px]"
                >
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      d={sidebarCollapsed ? "M6.75 13.5L11.25 9L6.75 4.5" : "M11.25 13.5L6.75 9L11.25 4.5"}
                      stroke="#FAEEE6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                role="presentation"
                viewBox={sidebarCollapsed ? "0 0 62 1" : "0 0 224 1"}
              >
                <line
                  stroke="#302420"
                  x2={sidebarCollapsed ? "62" : "224"}
                  y1="0.5"
                  y2="0.5"
                />
              </svg>
            </div>
          </div>

          {/* Navigation */}
          <div className="box-border content-stretch flex flex-col gap-[11px] items-start justify-start p-0 relative shrink-0 w-full">
            {/* Manage Birds */}
            <Tooltip>
              <TooltipTrigger asChild>
                <div className={`
                  ${activeTab === 'manage' ? 'bg-[#3d4c07] relative rounded-[10px] shrink-0 w-full' : 'relative shrink-0 w-full'}
                `}>
                  <div className="flex flex-row items-center justify-center relative size-full">
                    <div className={`box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 py-[7px] ${sidebarCollapsed ? 'relative' : 'relative w-full'}`}>
                      <div className="relative shrink-0 size-[18px]">
                        <svg
                          className="block size-full"
                          fill="none"
                          preserveAspectRatio="none"
                          viewBox="0 0 18 18"
                        >
                          <g clipPath="url(#clip0_2167_644)">
                            <path
                              d={sidebarSvgPaths.p1527c880}
                              stroke={activeTab === 'manage' ? "#FAEEE6" : "#CCAE9D"}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.8"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_2167_644">
                              <rect fill="white" height="18" width="18" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      {!sidebarCollapsed && (
                        <div className={`basis-0 font-['Crimson_Text:SemiBold',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[17.75px] text-left ${
                          activeTab === 'manage' ? 'text-[#faeee6]' : 'text-[#ccae9d]'
                        }`}>
                          <p className="block leading-[1.426]">Manage Birds</p>
                        </div>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveTab('manage')}
                    className="absolute inset-0 w-full h-full cursor-pointer hover:bg-[rgba(61,76,7,0.1)] transition-colors rounded-[10px]"
                  />
                </div>
              </TooltipTrigger>
              {sidebarCollapsed && (
                <TooltipContent side="right">
                  <p>Manage Birds</p>
                </TooltipContent>
              )}
            </Tooltip>

            {/* Analyze Data */}
            <Tooltip>
              <TooltipTrigger asChild>
                <div className={`
                  ${activeTab === 'statistics' ? 'bg-[#3d4c07] relative rounded-[10px] shrink-0 w-full' : 'relative shrink-0 w-full'}
                `}>
                  <div className="flex flex-row items-center justify-center relative size-full">
                    <div className={`box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 py-[7px] ${sidebarCollapsed ? 'relative' : 'relative w-full'}`}>
                      <div className="relative shrink-0 size-[18px]">
                        <svg
                          className="block size-full"
                          fill="none"
                          preserveAspectRatio="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            d={sidebarSvgPaths.p25fee280}
                            stroke={activeTab === 'statistics' ? "#FAEEE6" : "#CCAE9D"}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.8"
                          />
                        </svg>
                      </div>
                      {!sidebarCollapsed && (
                        <div className={`basis-0 font-['Crimson_Text:SemiBold',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[17.75px] text-left ${
                          activeTab === 'statistics' ? 'text-[#faeee6]' : 'text-[#ccae9d]'
                        }`}>
                          <p className="block leading-[1.426]">Analyze Data</p>
                        </div>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveTab('statistics')}
                    className="absolute inset-0 w-full h-full cursor-pointer hover:bg-[rgba(61,76,7,0.1)] transition-colors rounded-[10px]"
                  />
                </div>
              </TooltipTrigger>
              {sidebarCollapsed && (
                <TooltipContent side="right">
                  <p>Analyze Data</p>
                </TooltipContent>
              )}
            </Tooltip>

            {/* Share Data */}
            <Tooltip>
              <TooltipTrigger asChild>
                <div className={`
                  ${activeTab === 'import-export' ? 'bg-[#3d4c07] relative rounded-[10px] shrink-0 w-full' : 'relative shrink-0 w-full'}
                `}>
                  <div className="flex flex-row items-center justify-center relative size-full">
                    <div className={`box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 py-[7px] ${sidebarCollapsed ? 'relative' : 'relative w-full'}`}>
                      <div className="relative shrink-0 size-[18px]">
                        <svg
                          className="block size-full"
                          fill="none"
                          preserveAspectRatio="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            d={sidebarSvgPaths.pd1341c0}
                            stroke={activeTab === 'import-export' ? "#FAEEE6" : "#CCAE9D"}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.8"
                          />
                        </svg>
                      </div>
                      {!sidebarCollapsed && (
                        <div className={`basis-0 font-['Crimson_Text:SemiBold',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[17.75px] text-left ${
                          activeTab === 'import-export' ? 'text-[#faeee6]' : 'text-[#ccae9d]'
                        }`}>
                          <p className="block leading-[1.426]">Share Data</p>
                        </div>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveTab('import-export')}
                    className="absolute inset-0 w-full h-full cursor-pointer hover:bg-[rgba(61,76,7,0.1)] transition-colors rounded-[10px]"
                  />
                </div>
              </TooltipTrigger>
              {sidebarCollapsed && (
                <TooltipContent side="right">
                  <p>Share Data</p>
                </TooltipContent>
              )}
            </Tooltip>

            {/* Account Settings */}
            <Tooltip>
              <TooltipTrigger asChild>
                <div className={`
                  ${activeTab === 'settings' ? 'bg-[#3d4c07] relative rounded-[10px] shrink-0 w-full' : 'relative shrink-0 w-full'}
                `}>
                  <div className="flex flex-row items-center justify-center relative size-full">
                    <div className={`box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 py-[7px] ${sidebarCollapsed ? 'relative' : 'relative w-full'}`}>
                      <div className="relative shrink-0 size-[18px]">
                        <svg
                          className="block size-full"
                          fill="none"
                          preserveAspectRatio="none"
                          viewBox="0 0 18 18"
                        >
                          <g clipPath="url(#clip0_2167_653)">
                            <g>
                              <path
                                d={sidebarSvgPaths.p24e27900}
                                stroke={activeTab === 'settings' ? "#FAEEE6" : "#CCAE9D"}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.8"
                              />
                              <path
                                d={sidebarSvgPaths.p1de49d00}
                                stroke={activeTab === 'settings' ? "#FAEEE6" : "#CCAE9D"}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.8"
                              />
                            </g>
                          </g>
                          <defs>
                            <clipPath id="clip0_2167_653">
                              <rect fill="white" height="18" width="18" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      {!sidebarCollapsed && (
                        <div className={`basis-0 font-['Crimson_Text:SemiBold',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[17.75px] text-left ${
                          activeTab === 'settings' ? 'text-[#faeee6]' : 'text-[#ccae9d]'
                        }`}>
                          <p className="block leading-[1.426]">Account Settings</p>
                        </div>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveTab('settings')}
                    className="absolute inset-0 w-full h-full cursor-pointer hover:bg-[rgba(61,76,7,0.1)] transition-colors rounded-[10px]"
                  />
                </div>
              </TooltipTrigger>
              {sidebarCollapsed && (
                <TooltipContent side="right">
                  <p>Account Settings</p>
                </TooltipContent>
              )}
            </Tooltip>
          </div>

          {/* Bottom Actions */}
          <div className="relative shrink-0 w-full">
            <div className="relative size-full">
            </div>

            {/* Bottom Action Buttons - Positioned at bottom */}
            <div className="mt-auto">
              <div className="box-border content-stretch flex flex-col gap-3.5 items-start justify-start px-4 py-4 relative w-full">
                {/* Divider */}
                <div className="h-0 relative shrink-0 w-full">
                  <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      role="presentation"
                      viewBox={sidebarCollapsed ? "0 0 30 2" : "0 0 192 2"}
                    >
                      <line
                        stroke="#221816"
                        strokeWidth="2"
                        x2={sidebarCollapsed ? "30" : "192"}
                        y1="1"
                        y2="1"
                      />
                    </svg>
                  </div>
                </div>

                {/* Back to Gallery Button */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="bg-[#422e27] relative rounded-[10px] shrink-0 w-full hover:bg-[#4a342c] transition-colors">
                      <div className="flex flex-row items-center justify-center relative size-full">
                        <div className={`box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 py-[7px] ${sidebarCollapsed ? 'relative' : 'relative w-full'}`}>
                          <div className="relative shrink-0 size-[18px]">
                            <svg
                              className="block size-full"
                              fill="none"
                              preserveAspectRatio="none"
                              viewBox="0 0 18 18"
                            >
                              <path
                                d={sidebarSvgPaths.p2d7c2780}
                                stroke="#FAEEE6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.8"
                              />
                            </svg>
                          </div>
                          {!sidebarCollapsed && (
                            <div className="basis-0 font-['Crimson_Text:SemiBold',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[17.75px] text-left text-[#faeee6]">
                              <p className="block leading-[1.426]">Back to gallery</p>
                            </div>
                          )}
                        </div>
                      </div>
                      <button
                        onClick={handleBackToGallery}
                        className="absolute inset-0 w-full h-full cursor-pointer hover:bg-[rgba(74,52,44,0.1)] transition-colors rounded-[10px]"
                      />
                    </div>
                  </TooltipTrigger>
                  {sidebarCollapsed && (
                    <TooltipContent side="right">
                      <p>Back to gallery</p>
                    </TooltipContent>
                  )}
                </Tooltip>

                {/* Save Changes Button */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="bg-[#422e27] relative rounded-[10px] shrink-0 w-full hover:bg-[#4a342c] transition-colors">
                      <div className="flex flex-row items-center justify-center relative size-full">
                        <div className={`box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 py-[7px] ${sidebarCollapsed ? 'relative' : 'relative w-full'}`}>
                          <div className="relative shrink-0 size-[18px]">
                            <svg
                              className="block size-full"
                              fill="none"
                              preserveAspectRatio="none"
                              viewBox="0 0 18 18"
                            >
                              <path
                                d={sidebarSvgPaths.p3cd4fe00}
                                stroke="#FAEEE6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.8"
                              />
                            </svg>
                          </div>
                          {!sidebarCollapsed && (
                            <div className="basis-0 font-['Crimson_Text:SemiBold',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[17.75px] text-left text-[#faeee6]">
                              <p className="block leading-[1.426]">Save changes</p>
                            </div>
                          )}
                        </div>
                      </div>
                      <button
                        onClick={handleSave}
                        className="absolute inset-0 w-full h-full cursor-pointer hover:bg-[rgba(74,52,44,0.1)] transition-colors rounded-[10px]"
                      />
                    </div>
                  </TooltipTrigger>
                  {sidebarCollapsed && (
                    <TooltipContent side="right">
                      <p>Save changes</p>
                    </TooltipContent>
                  )}
                </Tooltip>

                {/* Logout Button */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="bg-[#422e27] relative rounded-[10px] shrink-0 w-full hover:bg-[#4a342c] transition-colors">
                      <div className="flex flex-row items-center justify-center relative size-full">
                        <div className={`box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 py-[7px] ${sidebarCollapsed ? 'relative' : 'relative w-full'}`}>
                          <div className="relative shrink-0 size-[18px]">
                            <svg
                              className="block size-full"
                              fill="none"
                              preserveAspectRatio="none"
                              viewBox="0 0 18 18"
                            >
                              <path
                                d={sidebarSvgPaths.p2573cb00}
                                stroke="#FAEEE6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.8"
                              />
                            </svg>
                          </div>
                          {!sidebarCollapsed && (
                            <div className="basis-0 font-['Crimson_Text:SemiBold',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[17.75px] text-left text-[#faeee6]">
                              <p className="block leading-[1.426]">Logout</p>
                            </div>
                          )}
                        </div>
                      </div>
                      <button
                        onClick={handleLogout}
                        className="absolute inset-0 w-full h-full cursor-pointer hover:bg-[rgba(74,52,44,0.1)] transition-colors rounded-[10px]"
                      />
                    </div>
                  </TooltipTrigger>
                  {sidebarCollapsed && (
                    <TooltipContent side="right">
                      <p>Logout</p>
                    </TooltipContent>
                  )}
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Mobile Header Component  
  const MobileHeader = () => (
    <div className="md:hidden fixed top-0 left-0 right-0 bg-[#fff8f2] border-b border-[#f2dfd3] z-40 h-16">
      <div className="flex items-center justify-between px-4 h-full">
        {/* Back to Gallery */}
        <Button
          onClick={handleBackToGallery}
          variant="ghost"
          size="sm"
          className="flex items-center gap-2 text-[#856658] hover:bg-[#faeee6]"
        >
          <ArrowUpLeft className="w-5 h-5" />
          <span className="font-['Crimson_Text:SemiBold'] font-semibold text-[14px]">
            Back to gallery
          </span>
        </Button>

        {/* User Profile Icon with Logout */}
        <div className="relative">
          <Button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            variant="ghost"
            size="sm"
            className="w-8 h-8 rounded-full bg-[#e5d1c5] hover:bg-[#d4c4b8] p-0"
          >
            <UserIcon className="w-4 h-4 text-[#856658]" />
          </Button>
          
          {/* Logout Menu */}
          {isMobileMenuOpen && (
            <div className="absolute right-0 top-10 bg-white border border-[#f2dfd3] rounded-lg shadow-lg py-2 z-50 min-w-[120px]">
              <Button
                onClick={handleLogout}
                variant="ghost"
                size="sm"
                className="w-full justify-start px-3 py-2 text-[#856658] hover:bg-[#faeee6]"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // Mobile Bottom Navigation
  const MobileBottomNavigation = () => (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#160e0c] z-40 h-16">
      <div className="flex items-center justify-around h-full px-2">
        <button
          onClick={() => setActiveTab('manage')}
          className={`
            flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition-colors
            ${activeTab === 'manage' 
              ? 'bg-[#3d4c07] text-[#faeee6]' 
              : 'text-[#CCAE9D] hover:text-[#faeee6]'
            }
          `}
        >
          <Feather className="w-5 h-5" strokeWidth={1.8} />
          <span className="text-xs font-['Crimson_Text:SemiBold'] font-semibold">
            Manage
          </span>
        </button>

        <button
          onClick={() => setActiveTab('statistics')}
          className={`
            flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition-colors
            ${activeTab === 'statistics' 
              ? 'bg-[#3d4c07] text-[#faeee6]' 
              : 'text-[#CCAE9D] hover:text-[#faeee6]'
            }
          `}
        >
          <BarChart3 className="w-5 h-5" strokeWidth={1.8} />
          <span className="text-xs font-['Crimson_Text:SemiBold'] font-semibold">
            Stats
          </span>
        </button>

        <button
          onClick={() => setActiveTab('import-export')}
          className={`
            flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition-colors
            ${activeTab === 'import-export' 
              ? 'bg-[#3d4c07] text-[#faeee6]' 
              : 'text-[#CCAE9D] hover:text-[#faeee6]'
            }
          `}
        >
          <FileText className="w-5 h-5" strokeWidth={1.8} />
          <span className="text-xs font-['Crimson_Text:SemiBold'] font-semibold">
            Data
          </span>
        </button>

        <button
          onClick={() => setActiveTab('settings')}
          className={`
            flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition-colors
            ${activeTab === 'settings' 
              ? 'bg-[#3d4c07] text-[#faeee6]' 
              : 'text-[#CCAE9D] hover:text-[#faeee6]'
            }
          `}
        >
          <Settings2 className="w-5 h-5" strokeWidth={1.8} />
          <span className="text-xs font-['Crimson_Text:SemiBold'] font-semibold">
            Settings
          </span>
        </button>
      </div>
    </div>
  );

  // Content area header component
  const ContentHeader = ({ title, description }: { title: string; description: string }) => (
    <div className="box-border content-stretch flex flex-col gap-[15.75px] items-start justify-start leading-[0] mb-6 relative w-full text-left">
      <div className="font-['Cormorant:Bold_Italic',_sans-serif] font-bold italic relative shrink-0 text-[#252d09] text-[25.25px] w-full">
        <p className="block leading-[1.426]">{title}</p>
      </div>
      <div className="font-['Crimson_Text:Regular',_sans-serif] not-italic relative shrink-0 text-[#856658] text-[15.75px] w-full">
        <p className="block leading-[1.426]">{description}</p>
      </div>
    </div>
  );

  return (
    <TooltipProvider>
      <div className="fixed inset-0 bg-[#f7f2ef] z-50 overflow-hidden">
        {/* Mobile Header */}
        {isMobile && <MobileHeader />}
        
        {/* Mobile Overlay for dropdown */}
        {isMobile && isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-[rgba(66,46,39,0.46)] bg-opacity-50 z-30"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        <div className="flex h-full">
          {/* Desktop Sidebar */}
          {!isMobile && (
            <div className="shrink-0">
              <SidebarNavigation />
            </div>
          )}
          
          {/* Main Content */}
          <div className={`
            flex-1 overflow-hidden
            ${isMobile ? 'pt-16 pb-16' : ''}
          `}>
            <div className="h-full overflow-y-auto admin-content-padding bg-[#fff8f2]">
            {activeTab === 'manage' && (
              <div className="space-y-6">
                <ContentHeader 
                  title="Manage your birds" 
                  description="Add, edit, and organize your literary bird references"
                />
                
                {/* Mobile-First Search and Filter Bar - Matching Figma Design */}
                <div className="space-y-4">
                  {/* Add Quote Button - Full width on mobile only */}
                  <div className="lg:hidden">
                    <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                      <DialogTrigger asChild>
                        <Button className="w-full bg-[#66800b] hover:bg-[#5a7009] text-[#faeee6] rounded-lg h-10 font-['Crimson_Text:SemiBold'] font-semibold text-[14.2px]">
                          <Plus className="w-[14.4px] h-[14.4px] mr-[4.8px]" strokeWidth="1.44" />
                          Add a Quote
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Add New Bird Quote</DialogTitle>
                          <DialogDescription>
                            Add a new literary bird reference to your collection.
                          </DialogDescription>
                        </DialogHeader>
                        <BirdForm />
                      </DialogContent>
                    </Dialog>
                  </div>

                  {/* Mobile Search and Filter Bar */}
                  <div className="flex items-center gap-3 h-8 lg:hidden">
                    {/* View Toggle - Matching Figma exactly */}
                    <div className="bg-[#faeee6] border border-[#dec7ba] rounded-lg p-[0.8px] shrink-0">
                      <div className="flex items-center">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setViewMode('cards')}
                          className={`h-full p-2 rounded-lg ${
                            viewMode === 'cards' 
                              ? 'bg-[#bec97e] border border-[#cdd597] text-[#160e0c]' 
                              : 'text-[#856658] hover:bg-transparent'
                          }`}
                        >
                          <Grid3X3 className="w-[14.4px] h-[14.4px]" strokeWidth="1.44" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setViewMode('table')}
                          className={`h-full p-2 rounded-lg ${
                            viewMode === 'table' 
                              ? 'bg-[#bec97e] border border-[#cdd597] text-[#160e0c]' 
                              : 'text-[#856658] hover:bg-transparent'
                          }`}
                        >
                          <Table className="w-[14.4px] h-[14.4px]" strokeWidth="1.44" />
                        </Button>
                      </div>
                    </div>

                    {/* Search Input - Matching Figma */}
                    <div className="flex-1 bg-[#faeee6] rounded-lg h-full">
                      <div className="flex items-center h-full px-[12.8px] py-[5.6px] gap-2">
                        <Search className="w-4 h-4 text-[#856658]" strokeWidth="1.44" />
                        <Input
                          placeholder="Search"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="border-0 bg-transparent p-0 h-auto font-['Crimson_Text:SemiBold'] font-semibold text-[14.2px] text-[#856658] placeholder:text-[#856658] focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                      </div>
                    </div>

                    {/* Filter Button with Active Indicator */}
                    <div className="relative">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsFilterModalOpen(true)}
                        className={`h-full p-[5.6px] rounded-lg shrink-0 ${
                          filterMood !== 'all' || filterRegion !== 'all' || filterAuthor !== 'all' || filterFamily !== 'all'
                            ? 'bg-[#bec97e] text-[#160e0c] hover:bg-[#b8c276]'
                            : 'text-[#856658] hover:bg-[#faeee6]'
                        }`}
                      >
                        <Filter className="w-4 h-4" strokeWidth="1.44" />
                      </Button>
                      {/* Active Filter Indicator */}
                      {(filterMood !== 'all' || filterRegion !== 'all' || filterAuthor !== 'all' || filterFamily !== 'all') && (
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#66800b] rounded-full border border-white" />
                      )}
                    </div>

                    {/* Column Selector Button - Only show in table view */}
                    {viewMode === 'table' && (
                      <div className="relative">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setIsColumnSelectorOpen(true)}
                          className="h-full p-[5.6px] rounded-lg shrink-0 text-[#856658] hover:bg-[#faeee6]"
                        >
                          <Columns className="w-4 h-4" strokeWidth="1.44" />
                        </Button>
                      </div>
                    )}
                  </div>

                  {/* Desktop Layout - Clean search + filter button layout */}
                  <div className="hidden lg:flex items-center w-full">
                    {/* Search & Filter Section - 50% of screen width */}
                    <div className="flex items-center gap-2.5 w-1/2 min-w-0">
                      {/* Search Input - Matching Figma Design Exactly */}
                      <div className="bg-[#faeee6] relative rounded-[10px] shrink-0">
                        <div className="flex flex-row items-center relative size-full">
                          <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start pl-4 pr-[78px] py-[7px] relative size-full">
                            <div className="relative shrink-0 size-[18px]">
                              <svg
                                className="block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 18 18"
                              >
                                <path
                                  d={desktopSvgPaths.p3f3f9900}
                                  stroke="var(--stroke-0, #CCAE9D)"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.8"
                                />
                              </svg>
                            </div>
                            <Input
                              placeholder="Search"
                              value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value)}
                              className="border-0 bg-transparent p-0 h-auto font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#856658] text-[17.75px] text-left text-nowrap placeholder:text-[#856658] placeholder:text-[17.75px] focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none"
                              style={{ 
                                fontFamily: "'Crimson Text:SemiBold', sans-serif",
                                fontSize: "17.75px",
                                lineHeight: "1.426",
                                whiteSpace: "pre"
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Filter Button */}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsFilterModalOpen(true)}
                        className="bg-[#faeee6] border-0 rounded-[10px] px-4 py-[7px] h-auto gap-2.5 hover:bg-[#f0e6dd] transition-colors shrink-0"
                      >
                        <Filter className="w-[18px] h-[18px] text-[#856658]" strokeWidth="1.8" />
                        <span className="font-['Crimson_Text:SemiBold'] font-semibold text-[#856658] text-[17.75px] leading-[1.426]">
                          Filter
                        </span>
                      </Button>

                      {/* Columns Button - Only show in table view */}
                      {viewMode === 'table' && (
                        <div
                          onClick={() => setIsColumnSelectorOpen(true)}
                          className="bg-[#faeee6] box-border content-stretch flex flex-row gap-2.5 h-full items-center justify-start px-4 py-[7px] relative rounded-[10px] shrink-0 w-[126px] cursor-pointer hover:bg-[#f0e6dd] transition-colors"
                        >
                          <div className="relative shrink-0 size-[18px]">
                            <svg
                              className="block size-full"
                              fill="none"
                              preserveAspectRatio="none"
                              viewBox="0 0 18 18"
                            >
                              <g clipPath="url(#clip0_2183_48)">
                                <g>
                                  <path
                                    d={columnsButtonSvgPaths.p28d0a200}
                                    stroke="#856658"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.8"
                                  />
                                  <path
                                    d={columnsButtonSvgPaths.p24e27900}
                                    stroke="#856658"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.8"
                                  />
                                </g>
                              </g>
                              <defs>
                                <clipPath id="clip0_2183_48">
                                  <rect fill="white" height="18" width="18" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#856658] text-[17.75px] text-left text-nowrap">
                            <p className="block leading-[1.426] whitespace-pre">Columns</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Empty Gap - 30% of screen width */}
                    <div className="w-[30%]"></div>

                    {/* Right Controls Section - 20% of screen width */}
                    <div className="flex items-center gap-[22px] w-1/5 justify-end">
                      {/* View Toggle - Matching Figma Frame109 */}
                      <div className="bg-[#faeee6] border border-[#dec7ba] rounded-[10px] p-px shrink-0">
                        <div className="flex items-center">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setViewMode('cards')}
                            className={`h-full p-[10px] rounded-[10px] ${
                              viewMode === 'cards' 
                                ? 'bg-[#bec97e] border-2 border-[#cdd597] text-[#160e0c]' 
                                : 'text-[#856658] hover:bg-transparent'
                            }`}
                          >
                            <div className="relative shrink-0 size-[18px]">
                              <svg
                                className="block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 18 18"
                              >
                                <path
                                  d="M7.5 2.25H2.25V7.5H7.5V2.25Z"
                                  stroke="var(--stroke-0, #856658)"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.8"
                                />
                                <path
                                  d={desktopSvgPaths.p17cb2000}
                                  stroke="var(--stroke-0, #856658)"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.8"
                                />
                                <path
                                  d={desktopSvgPaths.p3d937300}
                                  stroke="var(--stroke-0, #856658)"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.8"
                                />
                                <path
                                  d={desktopSvgPaths.p29783680}
                                  stroke="var(--stroke-0, #856658)"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.8"
                                />
                              </svg>
                            </div>
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setViewMode('table')}
                            className={`h-full p-[10px] rounded-[10px] ${
                              viewMode === 'table' 
                                ? 'bg-[#bec97e] border-2 border-[#cdd597] text-[#160e0c]' 
                                : 'text-[#856658] hover:bg-transparent'
                            }`}
                          >
                            <div className="relative shrink-0 size-[18px]">
                              <svg
                                className="block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 18 18"
                              >
                                <path
                                  d={desktopSvgPaths.p14b18400}
                                  stroke="var(--stroke-0, #160E0C)"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.8"
                                />
                              </svg>
                            </div>
                          </Button>
                        </div>
                      </div>



                      {/* Add Quote Button - Matching Figma */}
                      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                        <DialogTrigger asChild>
                          <Button className="bg-[#66800b] hover:bg-[#5a7009] text-[#faeee6] rounded-[10px] gap-1.5 pl-2 pr-3 h-full font-['Crimson_Text:SemiBold'] font-semibold text-[17.75px] leading-[1.426]">
                            <div className="relative shrink-0 size-[18px]">
                              <svg
                                className="block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 18 18"
                              >
                                <path
                                  d={desktopSvgPaths.p19cf40}
                                  stroke="var(--stroke-0, #FAEEE6)"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.8"
                                />
                              </svg>
                            </div>
                            Add a Quote
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Add New Bird Quote</DialogTitle>
                            <DialogDescription>
                              Add a new literary bird reference to your collection.
                            </DialogDescription>
                          </DialogHeader>
                          <BirdForm />
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>

                {/* Bulk Actions Toolbar */}
                {selectedBirds.size > 0 && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Bird className="w-4 h-4 text-blue-600" />
                        <span className="text-blue-900 font-medium">{selectedBirds.size} birds selected</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setIsBulkEditOpen(true)}
                        >
                          <Edit2 className="w-4 h-4 mr-2" />
                          Bulk Edit
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleExport(true)}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Export Selected
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleCSVExport(true)}
                        >
                          <FileText className="w-4 h-4 mr-2" />
                          CSV Export
                        </Button>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="destructive" size="sm">
                              <Trash2 className="w-4 h-4 mr-2" />
                              Delete Selected
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Delete Selected Birds</AlertDialogTitle>
                              <AlertDialogDescription>
                                Are you sure you want to delete {selectedBirds.size} selected birds? This action cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction onClick={handleBulkDelete}>
                                Delete {selectedBirds.size} Birds
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </div>
                  </div>
                )}

                {/* Birds List/Table - Fixed height and padding */}
                <div className="p-[12px]">
                  {viewMode === 'table' ? (
                    <TableView />
                  ) : (
                    <div className="admin-cards-padding">
                      {/* Responsive Grid Layout - 1 column on mobile, 2 on tablet, 3+ on desktop */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredBirds.map((bird) => (
                          <BirdQuoteCard
                            key={bird.id}
                            bird={bird}
                            isSelected={selectedBirds.has(bird.id)}
                            onSelect={handleSelectBird}
                            onEdit={handleEditBird}
                            onDelete={(id) => {
                              // Show confirmation dialog
                              if (window.confirm(`Are you sure you want to delete this ${bird.species} quote? This action cannot be undone.`)) {
                                handleDeleteBird(id);
                              }
                            }}
                          />
                        ))}
                      </div>
                      
                      {filteredBirds.length === 0 && (
                        <Card className="p-12 text-center">
                          <p className="literary-description text-lg">No birds found matching your criteria.</p>
                        </Card>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'import-export' && (
              <div>
                <ContentHeader 
                  title="Import & Export" 
                  description="Manage your data with import and export tools"
                />
                
                <div className="max-w-2xl space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Export Data</CardTitle>
                      <CardDescription>
                        Download your bird collection in various formats.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex gap-4">
                        <Button onClick={() => handleExport()}>
                          <Download className="w-4 h-4 mr-2" />
                          Export as JSON
                        </Button>
                        <Button variant="outline" onClick={() => handleCSVExport()}>
                          <FileText className="w-4 h-4 mr-2" />
                          Export as CSV
                        </Button>
                      </div>
                      {selectedBirds.size > 0 && (
                        <div className="pt-4 border-t">
                          <p className="text-sm text-muted-foreground mb-2">Export selected birds only:</p>
                          <div className="flex gap-4">
                            <Button variant="outline" size="sm" onClick={() => handleExport(true)}>
                              <Download className="w-4 h-4 mr-2" />
                              Export Selected JSON
                            </Button>
                            <Button variant="outline" size="sm" onClick={() => handleCSVExport(true)}>
                              <FileText className="w-4 h-4 mr-2" />
                              Export Selected CSV
                            </Button>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Import Data</CardTitle>
                      <CardDescription>
                        Upload data to add to your collection or replace existing data.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">JSON Import (Replace All)</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          This will replace all existing data with the imported data.
                        </p>
                        <input
                          type="file"
                          accept=".json"
                          onChange={handleImport}
                          className="hidden"
                          id="import-file"
                        />
                        <Button asChild variant="outline">
                          <label htmlFor="import-file" className="cursor-pointer">
                            <Upload className="w-4 h-4 mr-2" />
                            Import JSON
                          </label>
                        </Button>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h4 className="font-medium mb-2">CSV Import (Add to Collection)</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          Import CSV data to add new birds to your existing collection. Includes duplicate detection.
                        </p>
                        <input
                          type="file"
                          accept=".csv"
                          onChange={handleCSVImport}
                          className="hidden"
                          id="csv-import-file"
                        />
                        <Button asChild variant="outline">
                          <label htmlFor="csv-import-file" className="cursor-pointer">
                            <FileText className="w-4 h-4 mr-2" />
                            Import CSV
                          </label>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === 'statistics' && (
              <div>
                <ContentHeader 
                  title="See your statistics" 
                  description="Explore insights and trends in your literary bird collection"
                />
                
                <div className="space-y-4">
                  {/* Redesigned Summary Cards - Matching Figma Design */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Top Species Card - Redesigned */}
                    <Card className="p-5">
                      <div className="space-y-5">
                        {/* Header - Total Birds */}
                        <div className="flex items-center justify-between">
                          <div className="font-['Cormorant:SemiBold',_sans-serif] font-semibold text-[#341818] text-[16px] capitalize">
                            Total Birds
                          </div>
                          <div className="font-['Cormorant:SemiBold_Italic',_sans-serif] font-semibold italic text-[#341818] text-[36px]">
                            {localBirds.length}
                          </div>
                        </div>
                        
                        {/* Subheading and Bars */}
                        <div className="space-y-[15px]">
                          <div className="font-['Crimson_Pro:SemiBold',_sans-serif] font-semibold text-[12px] text-[rgba(90,54,54,0.79)] uppercase">
                            Top 5 Species
                          </div>
                          <div className="space-y-[15px]">
                            {getTopSpecies().map((item, index) => (
                              <div key={item.species} className="flex items-center gap-1">
                                <div className="font-['Crimson_Pro:Medium',_sans-serif] font-medium text-[#5a3636] text-[14px] w-[102.971px] shrink-0">
                                  {item.species}
                                </div>
                                <div className="flex-1 flex items-center gap-1">
                                  <div 
                                    className="h-[9px] rounded-[11px]"
                                    style={{ 
                                      backgroundColor: getBarColors()[index],
                                      width: `${Math.max((item.count / Math.max(...getTopSpecies().map(s => s.count))) * 100, 8)}%`
                                    }}
                                  />
                                  <div className="font-['Crimson_Pro:Medium',_sans-serif] font-medium text-[#977676] text-[16px] ml-1">
                                    {item.count}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>

                    {/* Top Authors Card - Redesigned */}
                    <Card className="p-5">
                      <div className="space-y-5">
                        {/* Header - Total Authors */}
                        <div className="flex items-center justify-between">
                          <div className="font-['Cormorant:SemiBold',_sans-serif] font-semibold text-[#341818] text-[16px] capitalize">
                            Total Authors
                          </div>
                          <div className="font-['Cormorant:SemiBold_Italic',_sans-serif] font-semibold italic text-[#341818] text-[36px]">
                            {new Set(localBirds.map(b => b.author)).size}
                          </div>
                        </div>
                        
                        {/* Subheading and Bars */}
                        <div className="space-y-[15px]">
                          <div className="font-['Crimson_Pro:SemiBold',_sans-serif] font-semibold text-[12px] text-[rgba(90,54,54,0.79)] uppercase">
                            Top 5 Authors
                          </div>
                          <div className="space-y-[15px]">
                            {getTopAuthors().map((item, index) => (
                              <div key={item.author} className="flex items-center gap-1">
                                <div className="font-['Crimson_Pro:Medium',_sans-serif] font-medium text-[#5a3636] text-[14px] w-[102.971px] shrink-0">
                                  {item.author}
                                </div>
                                <div className="flex-1 flex items-center gap-1">
                                  <div 
                                    className="h-[9px] rounded-[11px]"
                                    style={{ 
                                      backgroundColor: getBarColors()[index],
                                      width: `${Math.max((item.count / Math.max(...getTopAuthors().map(a => a.count))) * 100, 8)}%`
                                    }}
                                  />
                                  <div className="font-['Crimson_Pro:Medium',_sans-serif] font-medium text-[#977676] text-[16px] ml-1">
                                    {item.count}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>

                    {/* Top Families Card - Redesigned */}
                    <Card className="p-5">
                      <div className="space-y-5">
                        {/* Header - Total Families */}
                        <div className="flex items-center justify-between">
                          <div className="font-['Cormorant:SemiBold',_sans-serif] font-semibold text-[#341818] text-[16px] capitalize">
                            Total Families
                          </div>
                          <div className="font-['Cormorant:SemiBold_Italic',_sans-serif] font-semibold italic text-[#341818] text-[36px]">
                            {new Set(localBirds.map(b => getBirdFamily(b.species))).size}
                          </div>
                        </div>
                        
                        {/* Subheading and Bars */}
                        <div className="space-y-[15px]">
                          <div className="font-['Crimson_Pro:SemiBold',_sans-serif] font-semibold text-[12px] text-[rgba(90,54,54,0.79)] uppercase">
                            Top 5 Families
                          </div>
                          <div className="space-y-[15px]">
                            <TooltipProvider>
                              {getTopFamilies(localBirds).map((item, index) => (
                                <div key={item.family} className="flex items-center gap-1">
                                  <div className="font-['Crimson_Pro:Medium',_sans-serif] font-medium text-[#5a3636] text-[14px] w-[102.971px] shrink-0 flex items-center gap-1">
                                    <Tooltip>
                                      <TooltipTrigger asChild>
                                        <span className="cursor-help italic truncate">
                                          {getFamilyLatinName(item.family)}
                                        </span>
                                      </TooltipTrigger>
                                      <TooltipContent 
                                        side="top" 
                                        className="max-w-xs bg-[#fffcfa] border border-[#f2eae4] rounded-lg shadow-lg"
                                        style={{ 
                                          fontFamily: 'Crimson Pro, serif',
                                          color: '#341818'
                                        }}
                                      >
                                        <div className="space-y-1 p-2">
                                          <div className="font-medium">{getFamilyDisplayName(item.family)}</div>
                                          <div className="text-xs opacity-80">
                                            Scientific family: <em>{getFamilyLatinName(item.family)}</em>
                                          </div>
                                        </div>
                                      </TooltipContent>
                                    </Tooltip>
                                    <Info className="w-3 h-3 opacity-40 shrink-0" />
                                  </div>
                                  <div className="flex-1 flex items-center gap-1">
                                    <div 
                                      className="h-[9px] rounded-[11px]"
                                      style={{ 
                                        backgroundColor: getBarColors()[index],
                                        width: `${Math.max((item.count / Math.max(...getTopFamilies(localBirds).map(f => f.count))) * 100, 8)}%`
                                      }}
                                    />
                                    <div className="font-['Crimson_Pro:Medium',_sans-serif] font-medium text-[#977676] text-[16px] ml-1">
                                      {item.count}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </TooltipProvider>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Geographic Distribution and Publication Timeline - Side by Side */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Geographic Distribution with Beautiful Map */}
                    <Card>
                      <CardHeader className="text-center">
                        <CardTitle className="font-['Crimson_Text:Bold',_sans-serif] not-italic text-[#160e0c] text-[17.75px] uppercase">
                          Geography
                        </CardTitle>
                        <CardDescription className="font-['Crimson_Text:Italic',_sans-serif] italic text-[#856658] text-[15.75px]">
                          How diverse is the bird collection so far?
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-row gap-12 items-center justify-center">
                          {/* Donut Chart */}
                          <div className="relative size-[230px] p-[0px]">
                            <ResponsiveContainer width="100%" height="100%">
                              <PieChart>
                                <Pie
                                  data={getRegionPieData()}
                                  cx="50%"
                                  cy="50%"
                                  cornerRadius={20}
                                  innerRadius={60}
                                  outerRadius={115}
                                  paddingAngle={0}
                                  dataKey="count"
                                >
                                  {getRegionPieData().map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                  ))}
                                </Pie>
                                <RechartsTooltip 
                                  content={({ active, payload }) => {
                                    if (active && payload && payload[0]) {
                                      const data = payload[0].payload;
                                      return (
                                        <div className="bg-[#fff8f2] box-border border-[#faeee6] border-[0.5px] rounded-[9px] px-[11px] py-2 shadow-[0px_2px_3.7px_0px_rgba(156,124,107,0.32)]">
                                          <div className="font-['Crimson_Text:Regular',_sans-serif] text-[#160e0c] text-[11px] text-center">
                                            <p className="block mb-0">{data.count} birds</p>
                                            <p className="block font-['Crimson_Text:Italic',_sans-serif] italic text-[#856658]">
                                              {data.region}
                                            </p>
                                          </div>
                                        </div>
                                      );
                                    }
                                    return null;
                                  }}
                                />
                              </PieChart>
                            </ResponsiveContainer>
                          </div>
                          
                          {/* Legend */}
                          <div className="flex flex-col gap-3 w-[181px]">
                            {getRegionPieData().map((item, index) => (
                              <div key={item.region} className="flex flex-row gap-4 items-center">
                                <div className="size-[11px]">
                                  <svg className="block size-full" viewBox="0 0 11 11">
                                    <circle cx="5.5" cy="5.5" r="5.5" fill={item.color} />
                                  </svg>
                                </div>
                                <div className="flex-1 font-['Crimson_Text:SemiBold',_sans-serif] text-[#856658] text-[15.75px]">
                                  {item.region}
                                </div>
                                <div className="font-['Crimson_Text:SemiBold',_sans-serif] text-[#856658] text-[15.75px]">
                                  {item.percentage}%
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Publication Timeline - Area Chart */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="literary-title">Publication Timeline</CardTitle>
                        <CardDescription className="literary-description">Distribution of works by historical period</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-80">
                          <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={getTimelineData()}>
                              <defs>
                                <linearGradient id="timelineGradient" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor="#8B4513" stopOpacity={0.8}/>
                                  <stop offset="95%" stopColor="#8B4513" stopOpacity={0.1}/>
                                </linearGradient>
                              </defs>
                              <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                              <XAxis 
                                dataKey="period" 
                                tick={{ fontSize: 12, fill: '#5a3636' }}
                                axisLine={{ stroke: '#8B4513' }}
                              />
                              <YAxis 
                                tick={{ fontSize: 12, fill: '#5a3636' }}
                                axisLine={{ stroke: '#8B4513' }}
                              />
                              <RechartsTooltip 
                                contentStyle={{ 
                                  backgroundColor: '#fffcfa',
                                  border: '1px solid #f2eae4',
                                  borderRadius: '8px',
                                  fontFamily: 'Crimson Pro, serif',
                                  color: '#341818'
                                }}
                              />
                              <Area 
                                type="monotone" 
                                dataKey="count" 
                                stroke="#8B4513" 
                                strokeWidth={2}
                                fill="url(#timelineGradient)"
                              />
                            </AreaChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Mood Distribution */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="literary-title">Mood Distribution</CardTitle>
                      <CardDescription className="literary-description">Emotional themes in literary bird references</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-7 gap-4">
                        {MOOD_OPTIONS.map(mood => {
                          const count = localBirds.filter(b => b.mood === mood.value).length;
                          return (
                            <div key={mood.value} className="text-center">
                              <div 
                                className="w-16 h-16 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold text-lg"
                                style={{ backgroundColor: mood.color }}
                              >
                                {count}
                              </div>
                              <div className="text-sm literary-description font-medium">{mood.label}</div>
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div>
                <ContentHeader 
                  title="Settings & User Management" 
                  description="Manage your account settings and user accounts"
                />
                
                <div className="space-y-6 max-w-4xl">
                  {/* My Account Section */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <UserIcon className="w-5 h-5" />
                        My Account
                      </CardTitle>
                      <CardDescription>
                        Update your account information and password
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="accountUsername">Username</Label>
                          <Input
                            id="accountUsername"
                            value={accountFormData.username}
                            onChange={(e) => setAccountFormData({...accountFormData, username: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="accountEmail">Email</Label>
                          <Input
                            id="accountEmail"
                            type="email"
                            value={accountFormData.email}
                            onChange={(e) => setAccountFormData({...accountFormData, email: e.target.value})}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="recoveryEmail">Recovery Email</Label>
                        <Input
                          id="recoveryEmail"
                          type="email"
                          value={accountFormData.recoveryEmail}
                          onChange={(e) => setAccountFormData({...accountFormData, recoveryEmail: e.target.value})}
                        />
                      </div>

                      <div className="flex justify-between items-center pt-4">
                        <Button
                          onClick={() => {
                            setPasswordUserId(currentUser?.id || '');
                            setIsChangePasswordOpen(true);
                          }}
                          variant="outline"
                        >
                          <Lock className="w-4 h-4 mr-2" />
                          Change Password
                        </Button>
                        
                        <Button onClick={handleUpdateAccount}>
                          <Save className="w-4 h-4 mr-2" />
                          Update Account
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* User Management Section - Only for admins */}
                  {currentUser?.role === 'admin' && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Users className="w-5 h-5" />
                            User Management
                          </div>
                          <Dialog open={isAddUserDialogOpen} onOpenChange={setIsAddUserDialogOpen}>
                            <DialogTrigger asChild>
                              <Button>
                                <UserPlus className="w-4 h-4 mr-2" />
                                Add User
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl">
                              <DialogHeader>
                                <DialogTitle>Create New User</DialogTitle>
                                <DialogDescription>
                                  Add a new user to the Literary Aviary admin system.
                                </DialogDescription>
                              </DialogHeader>
                              <UserForm />
                            </DialogContent>
                          </Dialog>
                        </CardTitle>
                        <CardDescription>
                          Manage user accounts and permissions
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {allUsers.map((user) => (
                            <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                              <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                  <span className="font-medium">{user.username}</span>
                                  <Badge variant={user.role === 'admin' ? 'default' : user.role === 'editor' ? 'secondary' : 'outline'}>
                                    {user.role}
                                  </Badge>
                                  {!user.isActive && <Badge variant="destructive">Inactive</Badge>}
                                  {user.id === currentUser?.id && <Badge variant="outline">You</Badge>}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  {user.email || 'No email set'} • Created {user.createdAt.toLocaleDateString()}
                                  {user.lastLogin && ` • Last login ${user.lastLogin.toLocaleDateString()}`}
                                </div>
                              </div>
                              
                              <div className="flex items-center gap-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => {
                                    setEditingUser(user);
                                  }}
                                >
                                  <Edit2 className="w-3 h-3" />
                                </Button>
                                
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => {
                                    setPasswordUserId(user.id);
                                    setIsChangePasswordOpen(true);
                                  }}
                                >
                                  <Lock className="w-3 h-3" />
                                </Button>
                                
                                {user.id !== currentUser?.id && (
                                  <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                      <Button variant="outline" size="sm">
                                        <Trash2 className="w-3 h-3" />
                                      </Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                      <AlertDialogHeader>
                                        <AlertDialogTitle>Delete User</AlertDialogTitle>
                                        <AlertDialogDescription>
                                          Are you sure you want to delete user "{user.username}"? This action cannot be undone.
                                        </AlertDialogDescription>
                                      </AlertDialogHeader>
                                      <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        <AlertDialogAction onClick={() => handleDeleteUser(user.id)}>
                                          Delete User
                                        </AlertDialogAction>
                                      </AlertDialogFooter>
                                    </AlertDialogContent>
                                  </AlertDialog>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Account Information */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Info className="w-5 h-5" />
                        Account Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium">Role:</span> {currentUser?.role}
                        </div>
                        <div>
                          <span className="font-medium">Account Created:</span> {currentUser?.createdAt.toLocaleDateString()}
                        </div>
                        <div>
                          <span className="font-medium">Last Login:</span> {currentUser?.lastLogin?.toLocaleDateString() || 'Never'}
                        </div>
                        <div>
                          <span className="font-medium">User ID:</span> {currentUser?.id}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileBottomNavigation />}

      {/* Filter Modal - Mobile and Desktop */}
      <Dialog open={isFilterModalOpen} onOpenChange={setIsFilterModalOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="font-['Cormorant:Bold_Italic'] font-bold italic text-[#252d09]">
              Filter & Sort Birds
            </DialogTitle>
            <DialogDescription className="font-['Crimson_Text:Regular'] text-[#856658]">
              Refine your search by mood, region, author, or family.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6">
            {/* Mood Filter */}
            <div className="space-y-3">
              <Label className="font-['Crimson_Text:SemiBold'] font-semibold text-[#856658] text-sm uppercase">
                Mood
              </Label>
              <Select value={filterMood} onValueChange={setFilterMood}>
                <SelectTrigger className="bg-[#faeee6] border-[#dec7ba]">
                  <SelectValue placeholder="All moods" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Moods</SelectItem>
                  {MOOD_OPTIONS.map(mood => (
                    <SelectItem key={mood.value} value={mood.value}>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{backgroundColor: mood.color}} />
                        {mood.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Region Filter */}
            <div className="space-y-3">
              <Label className="font-['Crimson_Text:SemiBold'] font-semibold text-[#856658] text-sm uppercase">
                Region
              </Label>
              <Select value={filterRegion} onValueChange={setFilterRegion}>
                <SelectTrigger className="bg-[#faeee6] border-[#dec7ba]">
                  <SelectValue placeholder="All regions" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Regions</SelectItem>
                  {REGION_OPTIONS.map(region => (
                    <SelectItem key={region} value={region}>{region}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Author Filter */}
            <div className="space-y-3">
              <Label className="font-['Crimson_Text:SemiBold'] font-semibold text-[#856658] text-sm uppercase">
                Author
              </Label>
              <Select value={filterAuthor} onValueChange={setFilterAuthor}>
                <SelectTrigger className="bg-[#faeee6] border-[#dec7ba]">
                  <SelectValue placeholder="All authors" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Authors</SelectItem>
                  {getUniqueAuthors().map(author => (
                    <SelectItem key={author} value={author}>{author}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Family Filter */}
            <div className="space-y-3">
              <Label className="font-['Crimson_Text:SemiBold'] font-semibold text-[#856658] text-sm uppercase">
                Bird Family
              </Label>
              <Select value={filterFamily} onValueChange={setFilterFamily}>
                <SelectTrigger className="bg-[#faeee6] border-[#dec7ba]">
                  <SelectValue placeholder="All families" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Families</SelectItem>
                  {getUniqueFamilies().map(family => (
                    <SelectItem key={family.value} value={family.value}>
                      <div className="flex flex-col text-left">
                        <span>{family.displayName}</span>
                        <span className="text-xs italic opacity-60">{family.latinName}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Active Filters Summary */}
            {(filterMood !== 'all' || filterRegion !== 'all' || filterAuthor !== 'all' || filterFamily !== 'all') && (
              <div className="bg-[#fff8f2] p-3 rounded-lg border border-[#f2dfd3]">
                <div className="text-sm font-['Crimson_Text:SemiBold'] font-semibold text-[#856658] mb-2">
                  Active Filters:
                </div>
                <div className="flex flex-wrap gap-2">
                  {filterMood !== 'all' && (
                    <Badge 
                      variant="secondary" 
                      className="bg-[#faeee6] text-[#856658] hover:bg-[#f0e6dd]"
                      onClick={() => setFilterMood('all')}
                    >
                      Mood: {MOOD_OPTIONS.find(m => m.value === filterMood)?.label}
                      <X className="w-3 h-3 ml-1 cursor-pointer" />
                    </Badge>
                  )}
                  {filterRegion !== 'all' && (
                    <Badge 
                      variant="secondary" 
                      className="bg-[#faeee6] text-[#856658] hover:bg-[#f0e6dd]"
                      onClick={() => setFilterRegion('all')}
                    >
                      Region: {filterRegion}
                      <X className="w-3 h-3 ml-1 cursor-pointer" />
                    </Badge>
                  )}
                  {filterAuthor !== 'all' && (
                    <Badge 
                      variant="secondary" 
                      className="bg-[#faeee6] text-[#856658] hover:bg-[#f0e6dd]"
                      onClick={() => setFilterAuthor('all')}
                    >
                      Author: {filterAuthor}
                      <X className="w-3 h-3 ml-1 cursor-pointer" />
                    </Badge>
                  )}
                  {filterFamily !== 'all' && (
                    <Badge 
                      variant="secondary" 
                      className="bg-[#faeee6] text-[#856658] hover:bg-[#f0e6dd]"
                      onClick={() => setFilterFamily('all')}
                    >
                      Family: {getFamilyDisplayName(filterFamily)}
                      <X className="w-3 h-3 ml-1 cursor-pointer" />
                    </Badge>
                  )}
                </div>
              </div>
            )}

            {/* Clear All Filters Button */}
            {(filterMood !== 'all' || filterRegion !== 'all' || filterAuthor !== 'all' || filterFamily !== 'all') && (
              <Button
                variant="outline"
                onClick={() => {
                  setFilterMood('all');
                  setFilterRegion('all');
                  setFilterAuthor('all');
                  setFilterFamily('all');
                }}
                className="w-full border-[#dec7ba] text-[#856658] hover:bg-[#faeee6]"
              >
                Clear All Filters
              </Button>
            )}
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button
              variant="outline"
              onClick={() => setIsFilterModalOpen(false)}
              className="border-[#dec7ba] text-[#856658] hover:bg-[#faeee6]"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* CSV Import Dialog */}
      <Dialog open={isCSVImportOpen} onOpenChange={setIsCSVImportOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>CSV Import Preview</DialogTitle>
            <DialogDescription>
              Review the data to be imported. {duplicateGroups.length > 0 && `${duplicateGroups.length} potential duplicates detected.`}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            {duplicateGroups.length > 0 && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-medium text-yellow-900 mb-2">⚠️ Duplicate Detection</h4>
                <p className="text-sm text-yellow-800 mb-3">
                  Found {duplicateGroups.length} potential duplicate(s). Choose how to handle them:
                </p>
                <div className="space-y-2">
                  {duplicateGroups.map((group, index) => (
                    <div key={index} className="text-xs bg-white p-2 rounded border">
                      <strong>Original:</strong> {group.original.species} - {group.original.author} ({group.reason})
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="border rounded-lg p-4 max-h-60 overflow-y-auto">
              <h4 className="font-medium mb-2">Preview ({csvData.length} birds to import)</h4>
              <div className="text-xs space-y-1">
                {csvData.slice(0, 5).map((bird, index) => (
                  <div key={index} className="border-b pb-1">
                    <strong>{bird.species}</strong> - {bird.author} - "{bird.quote.substring(0, 50)}..."
                  </div>
                ))}
                {csvData.length > 5 && (
                  <div className="text-gray-500">...and {csvData.length - 5} more</div>
                )}
              </div>
            </div>
            
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsCSVImportOpen(false)}>
                Cancel
              </Button>
              {duplicateGroups.length > 0 && (
                <Button variant="outline" onClick={() => handleConfirmCSVImport(true)}>
                  Skip Duplicates & Import
                </Button>
              )}
              <Button onClick={() => handleConfirmCSVImport(false)}>
                Import All ({csvData.length} birds)
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Edit Bird Dialog */}
      {editingBird && (
        <Dialog open={!!editingBird} onOpenChange={() => setEditingBird(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Edit Bird Quote</DialogTitle>
              <DialogDescription>
                Update the information for this literary bird reference.
              </DialogDescription>
            </DialogHeader>
            <BirdForm isEditing />
          </DialogContent>
        </Dialog>
      )}

      {/* Change Password Dialog */}
      <Dialog open={isChangePasswordOpen} onOpenChange={setIsChangePasswordOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Change Password</DialogTitle>
            <DialogDescription>
              {passwordUserId === currentUser?.id 
                ? 'Enter your current password and choose a new one'
                : `Set a new password for user: ${allUsers.find(u => u.id === passwordUserId)?.username}`
              }
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            {passwordUserId === currentUser?.id && (
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input
                  id="currentPassword"
                  type="password"
                  value={passwordFormData.currentPassword}
                  onChange={(e) => setPasswordFormData({...passwordFormData, currentPassword: e.target.value})}
                />
              </div>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="newPassword">New Password</Label>
              <Input
                id="newPassword"
                type="password"
                value={passwordFormData.newPassword}
                onChange={(e) => setPasswordFormData({...passwordFormData, newPassword: e.target.value})}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={passwordFormData.confirmPassword}
                onChange={(e) => setPasswordFormData({...passwordFormData, confirmPassword: e.target.value})}
              />
            </div>
            
            <div className="flex justify-end gap-2 pt-4">
              <Button variant="outline" onClick={() => {
                setIsChangePasswordOpen(false);
                setPasswordFormData({ currentPassword: '', newPassword: '', confirmPassword: '' });
                setPasswordUserId('');
              }}>
                Cancel
              </Button>
              <Button onClick={handleChangePassword}>
                Change Password
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Edit User Dialog */}
      {editingUser && (
        <Dialog open={!!editingUser} onOpenChange={() => setEditingUser(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Edit User</DialogTitle>
              <DialogDescription>
                Update user information and permissions.
              </DialogDescription>
            </DialogHeader>
            <UserForm isEditing />
          </DialogContent>
        </Dialog>
      )}

      {/* Bulk Edit Dialog */}
      <Dialog open={isBulkEditOpen} onOpenChange={setIsBulkEditOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Bulk Edit Birds</DialogTitle>
            <DialogDescription>
              Edit multiple birds at once. Only fields you modify will be updated.
            </DialogDescription>
          </DialogHeader>
          <BulkEditForm />
        </DialogContent>
      </Dialog>

      {/* Column Selector Modal */}
      <Dialog open={isColumnSelectorOpen} onOpenChange={setIsColumnSelectorOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="font-['Cormorant:Bold_Italic'] font-bold italic text-[#252d09]">
              Table Columns
            </DialogTitle>
            <DialogDescription className="font-['Crimson_Text:Regular'] text-[#856658]">
              Select which columns to display in the table view.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            {/* Quick Actions */}
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={showAllColumns}
                className="flex-1 border-[#dec7ba] text-[#856658] hover:bg-[#faeee6]"
              >
                <Eye className="w-4 h-4 mr-2" />
                Show All
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={hideAllColumns}
                className="flex-1 border-[#dec7ba] text-[#856658] hover:bg-[#faeee6]"
              >
                <EyeOff className="w-4 h-4 mr-2" />
                Hide All
              </Button>
            </div>

            {/* Column Checkboxes */}
            <div className="space-y-3">
              {TABLE_COLUMNS.map(column => (
                <div key={column.key} className="flex items-center space-x-2">
                  <Checkbox
                    id={column.key}
                    checked={visibleColumns.has(column.key)}
                    onCheckedChange={() => toggleColumnVisibility(column.key)}
                  />
                  <Label 
                    htmlFor={column.key}
                    className="font-['Crimson_Text:SemiBold'] font-semibold text-[#856658] text-sm cursor-pointer"
                  >
                    {column.label}
                  </Label>
                </div>
              ))}
            </div>

            {/* Visible Column Count */}
            <div className="text-center text-sm text-[#856658] bg-[#fff8f2] p-2 rounded-lg">
              {visibleColumns.size} of {TABLE_COLUMNS.length} columns visible
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button
              onClick={() => setIsColumnSelectorOpen(false)}
              className="bg-[#66800b] hover:bg-[#5a7009] text-[#faeee6]"
            >
              Done
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      </div>
    </TooltipProvider>
  );
}