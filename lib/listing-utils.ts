import { ListingStatus, PropertyType } from '@/app/generated/prisma';

export const statusLabels: Record<ListingStatus, string> = {
  VENTE: 'Vente',
  LOCATION: 'Location',
  VENTE_LOCATION: 'Vente & Location',
};

export const statusToSlug: Record<string, ListingStatus> = {
  vente: ListingStatus.VENTE,
  location: ListingStatus.LOCATION,
  'vente&location': ListingStatus.VENTE_LOCATION,
};

export const propertyTypeLabels: Record<PropertyType, string> = {
  APPARTEMENT: 'Appartement',
  VILLA: 'Villa',
  MAISON: 'Maison',
  HOTEL_PARTICULIER: 'H\u00f4tel particulier',
};

export const propertyTypeToSlug: Record<string, PropertyType> = {
  appartement: PropertyType.APPARTEMENT,
  villa: PropertyType.VILLA,
  maison: PropertyType.MAISON,
  'h\u00f4tel particulier': PropertyType.HOTEL_PARTICULIER,
};

export function formatPrice(price: number, status: ListingStatus): string {
  const formatted = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(price);

  return status === ListingStatus.LOCATION ? `${formatted}/mois` : formatted;
}

export function getStatusBadge(status: ListingStatus): string {
  switch (status) {
    case ListingStatus.VENTE:
      return '\u00c0 vendre';
    case ListingStatus.LOCATION:
      return '\u00c0 louer';
    case ListingStatus.VENTE_LOCATION:
      return 'Vente & Location';
  }
}
