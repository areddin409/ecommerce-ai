import { PackageIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"
import {
  MATERIALS_SANITY_LIST,
  COLORS_SANITY_LIST
} from "@/lib/constants/filters"

/**
 * Product Document Schema
 *
 * Represents a product in the e-commerce catalog. Contains all information needed
 * for display, filtering, purchasing, and inventory management.
 *
 * @field name - Product name (required)
 * @field slug - URL-friendly identifier (required, auto-generated)
 * @field description - Product description text
 * @field price - Price in GBP (required, positive number)
 * @field category - Reference to category document (required)
 * @field material - Product material (e.g., Wood, Metal, Fabric)
 * @field color - Product color
 * @field dimensions - Physical dimensions string
 * @field images - Product images array (min 1 required)
 * @field stock - Available inventory count (default: 0)
 * @field featured - Show on homepage/promotions (default: false)
 * @field assemblyRequired - Whether assembly needed (default: false)
 *
 * @group details - Core product information and attributes
 * @group media - Product images
 * @group inventory - Stock, featured status, and assembly info
 *
 * @preview Shows product name, category, price, and first image
 *
 * @example
 * {
 *   name: "Modern Sofa",
 *   price: 599.99,
 *   category: { _ref: "category-id" },
 *   stock: 15,
 *   featured: true
 * }
 */
export const productType = defineType({
  name: "product",
  title: "Product",
  type: "document",
  icon: PackageIcon,
  groups: [
    { name: "details", title: "Details", default: true },
    { name: "media", title: "Media" },
    { name: "inventory", title: "Inventory" }
  ],
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      group: "details",
      description: "The display name of the product shown to customers",
      validation: (rule) => [rule.required().error("Product name is required")]
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "details",
      options: {
        source: "name",
        maxLength: 96
      },
      description:
        "URL-friendly identifier auto-generated from product name. Used in product page URLs.",
      validation: (rule) => [
        rule.required().error("Slug is required for URL generation")
      ]
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      group: "details",
      rows: 4,
      description:
        "Detailed product description shown on product pages. Supports multiple lines of text."
    }),
    defineField({
      name: "price",
      title: "Price (GBP)",
      type: "number",
      group: "details",
      description:
        "Product price in British Pounds. Use decimal format for pence (e.g., 599.99).",
      validation: (rule) => [
        rule.required().error("Price is required"),
        rule.positive().error("Price must be a positive number")
      ]
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      group: "details",
      description:
        "The category this product belongs to. Used for filtering and navigation.",
      validation: (rule) => [rule.required().error("Category is required")]
    }),
    defineField({
      name: "material",
      title: "Material",
      type: "string",
      group: "details",
      description:
        "Primary material the product is made from. Used for product filtering.",
      options: {
        list: MATERIALS_SANITY_LIST,
        layout: "radio"
      }
    }),
    defineField({
      name: "color",
      title: "Color",
      type: "string",
      group: "details",
      description: "Primary color of the product. Used for product filtering.",
      options: {
        list: COLORS_SANITY_LIST,
        layout: "radio"
      }
    }),
    defineField({
      name: "dimensions",
      title: "Dimensions",
      type: "string",
      group: "details",
      description:
        'Physical dimensions of the product (e.g., "120cm x 80cm x 75cm" for width x depth x height).'
    }),
    defineField({
      name: "images",
      title: "Product Images",
      type: "array",
      group: "media",
      of: [
        {
          type: "image",
          options: {
            hotspot: true
          }
        }
      ],
      description:
        "Product images for gallery. First image is used as thumbnail. Hotspot enables precise focal point control.",
      validation: (rule) => [
        rule.min(1).error("At least one image is required")
      ]
    }),
    defineField({
      name: "stock",
      title: "Stock Level",
      type: "number",
      group: "inventory",
      initialValue: 0,
      description:
        "Current number of items in stock. Automatically decremented when orders are placed via Stripe webhooks.",
      validation: (rule) => [
        rule.min(0).error("Stock cannot be negative"),
        rule.integer().error("Stock must be a whole number")
      ]
    }),
    defineField({
      name: "featured",
      title: "Featured Product",
      type: "boolean",
      group: "inventory",
      initialValue: false,
      description:
        "Display this product on the homepage and in promotional sections. Use for bestsellers or seasonal items."
    }),
    defineField({
      name: "assemblyRequired",
      title: "Assembly Required",
      type: "boolean",
      group: "inventory",
      initialValue: false,
      description:
        "Indicates if the product requires assembly. Displayed as a badge on product pages."
    })
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "category.title",
      media: "images.0",
      price: "price"
    },
    prepare({ title, subtitle, media, price }) {
      return {
        title,
        subtitle: `${subtitle ? subtitle + " • " : ""}£${price ?? 0}`,
        media
      }
    }
  }
})
