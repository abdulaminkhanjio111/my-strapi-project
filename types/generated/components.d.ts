import type { Schema, Struct } from '@strapi/strapi';

export interface InclusionandexclusionExclusionItem
  extends Struct.ComponentSchema {
  collectionName: 'components_inclusionandexclusion_exclusion_items';
  info: {
    description: '';
    displayName: 'ExclusionItem';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface InclusionandexclusionInclusionItem
  extends Struct.ComponentSchema {
  collectionName: 'components_inclusionandexclusion_inclusion_items';
  info: {
    description: '';
    displayName: 'InclusionItem';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface TripDetailsActivityItem extends Struct.ComponentSchema {
  collectionName: 'components_trip_details_activity_items';
  info: {
    displayName: 'ActivityItem';
  };
  attributes: {
    activity: Schema.Attribute.String;
  };
}

export interface TripDetailsActivityItm extends Struct.ComponentSchema {
  collectionName: 'components_trip_details_activity_itms';
  info: {
    displayName: 'ActivityItm';
  };
  attributes: {
    activity: Schema.Attribute.String;
  };
}

export interface TripDetailsTripItinerary extends Struct.ComponentSchema {
  collectionName: 'components_trip_details_trip_itineraries';
  info: {
    description: '';
    displayName: 'Trip Itinerary';
  };
  attributes: {
    activities: Schema.Attribute.Component<'trip-details.activity-itm', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface TripHeighlightTripHeighlight extends Struct.ComponentSchema {
  collectionName: 'components_trip_heighlight_trip_heighlights';
  info: {
    displayName: 'Trip Heighlight';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'inclusionandexclusion.exclusion-item': InclusionandexclusionExclusionItem;
      'inclusionandexclusion.inclusion-item': InclusionandexclusionInclusionItem;
      'trip-details.activity-item': TripDetailsActivityItem;
      'trip-details.activity-itm': TripDetailsActivityItm;
      'trip-details.trip-itinerary': TripDetailsTripItinerary;
      'trip-heighlight.trip-heighlight': TripHeighlightTripHeighlight;
    }
  }
}
