import { UserIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

/**
 * Customer Document Schema
 *
 * Represents a customer in the e-commerce platform. This document type stores
 * customer information and integrates with both Clerk (authentication) and
 * Stripe (payments).
 *
 * @field email - Customer's email address (required, unique identifier)
 * @field name - Customer's full name
 * @field clerkUserId - Links to Clerk authentication user
 * @field stripeCustomerId - Links to Stripe customer for payment processing (required, read-only)
 * @field createdAt - Timestamp of when the customer record was created (auto-generated, read-only)
 *
 * @group details - Core customer information
 * @group stripe - Stripe integration data
 *
 * @preview Displays customer name or email with Stripe Customer ID
 * @orderings Can be sorted by creation date (newest first) or email (A-Z)
 */
export const customerType = defineType({
  name: "customer",
  title: "Customer",
  type: "document",
  icon: UserIcon,
  groups: [
    { name: "details", title: "Customer Details", default: true },
    { name: "stripe", title: "Stripe" }
  ],
  fields: [
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      group: "details",
      description: "Customer's email address used for communication and login",
      validation: (Rule) => [Rule.required().error("Email is required")]
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      group: "details",
      description:
        "Customer's full name for personalization and order fulfillment"
    }),
    defineField({
      name: "clerkUserId",
      title: "Clerk User ID",
      type: "string",
      group: "details",
      description:
        "Unique identifier from Clerk authentication system. Links this customer to their authenticated user account."
    }),
    defineField({
      name: "stripeCustomerId",
      title: "Stripe Customer ID",
      type: "string",
      group: "stripe",
      readOnly: true,
      description:
        "Unique identifier from Stripe. Automatically created when customer makes their first purchase. Used for payment processing and order history.",
      validation: (rule) => [
        rule.required().error("Stripe Customer ID is required")
      ]
    }),
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      group: "details",
      readOnly: true,
      description:
        "Timestamp of when this customer record was created. Auto-generated and cannot be modified.",
      initialValue: () => new Date().toISOString()
    })
  ],
  preview: {
    select: {
      email: "email",
      name: "name",
      stripeCustomerId: "stripeCustomerId"
    },
    prepare({ email, name, stripeCustomerId }) {
      return {
        title: name ?? email ?? "Unknown Customer",
        subtitle: stripeCustomerId
          ? `${email ?? ""} • ${stripeCustomerId}`
          : (email ?? "")
      }
    }
  },
  orderings: [
    {
      title: "Newest first",
      name: "createdAtDesc",
      by: [{ field: "createdAt", direction: "desc" }]
    },
    {
      title: "Email A-Z",
      name: "emailAsc",
      by: [{ field: "email", direction: "asc" }]
    }
  ]
})
